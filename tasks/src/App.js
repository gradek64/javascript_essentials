import React, { Component } from 'react';
//custom
import './App.css';
import apiService from './services/api-service';

//sorting
const sortASC = (data, sortOn) => {
  return data.sort(function (a, b) {
    const x = a[sortOn].toUpperCase();
    const y = b[sortOn].toUpperCase();
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
    return 0;
  });
};
const formatNumber = (number) =>
  new Intl.NumberFormat('en', { minimumFractionDigits: 2 }).format(number);

class App extends Component {
  state = {
    data: null,
    all: null,
    search: '',
  };

  componentDidMount = async () => {
    const branch1 = await apiService.get('/api/branch1.json');
    const branch2 = await apiService.get('/api/branch2.json');
    const branch3 = await apiService.get('/api/branch3.json');

    const mergeRequests = await Promise.all([branch1, branch2, branch3]);

    //1. merge all
    const allProducts = mergeRequests.reduce((all, { products }) => {
      const productsMerged = [...products];
      all.push(...productsMerged);
      return all;
    }, []);

    //2. calculate revenue and add revenue property
    const productsWithRevenue = allProducts.map((element) => {
      const { unitPrice, sold } = element;
      return { ...element, revenue: unitPrice * sold };
    });

    //3. find duplicate data and merge them
    const duplicates = {};
    productsWithRevenue.forEach(function (element) {
      const { name } = element;
      const trimStirng = name.trim();
      if (!duplicates[trimStirng]) duplicates[trimStirng] = [element];
      duplicates[trimStirng].push(element);
    });

    //4. reduce data from duplicates
    const dataReduced = Object.entries(duplicates).map(([key, entries]) => {
      const revenueTotal = entries.reduce((total, { revenue }) => {
        return total + revenue;
      }, 0);
      const soldTotal = entries.reduce((total, { sold }) => {
        return total + sold;
      }, 0);
      const [first] = entries;

      return { ...first, sold: soldTotal, revenue: revenueTotal };
    }, 0);

    //5. format data
    const formatedData = dataReduced.map((entry) => {
      const { revenue } = entry;
      const format = formatNumber(revenue);
      return { ...entry, revenue: format };
    });

    //6. sort data alphabetically done in render so it takes filtered ones as well
    this.setState({
      data: formatedData,
      all: formatedData,
    });
  };

  filterData = (e) => {
    const { data, all } = this.state;
    const { value } = e.target;
    this.setState({ search: value });
    //at least 2 charackters
    if (value.length >= 2) {
      const searchResults = data.filter((entry, i) => {
        const regex = new RegExp(`^${value}`, 'i');
        if (regex.test(entry.name)) return entry;
      });
      this.setState({ data: searchResults.length === 0 ? all : searchResults });
    } else {
      this.setState({ data: all });
    }
  };
  render() {
    const { data, search } = this.state;
    const totalRevenue =
      data &&
      data.reduce(
        (total, { revenue }) => total + Number(revenue.replace(/[,]/g, '')),
        0
      );

    return (
      <>
        {!data && (
          <div>
            <p>{'Loading...'}</p>
          </div>
        )}
        {data && (
          <div className="product-list">
            <label>Search Products</label>
            <input
              placeholder="...filter data"
              type="text"
              value={search}
              onChange={this.filterData}
            />
            <table className="tableData">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {sortASC(data, 'name').map(({ name, revenue }) => (
                  <tr key={name}>
                    <th>{name}</th>
                    <th>{revenue}</th>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th>{formatNumber(totalRevenue)}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </>
    );
  }
}

export default App;

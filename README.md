
#  Playwright Tests for OpenCart Search Functionality

## Overview

This repository contains a suite of Playwright tests designed to verify the behavior of the search functionality on the [OpenCart Demo Store](https://demo.opencart.com/). The tests cover a variety of scenarios, including valid, invalid, and edge cases for search queries.

The tests are written in TypeScript and use Playwright's testing framework for browser automation.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (preferably the latest LTS version)
- [Playwright](https://playwright.dev/) (Install using npm or yarn)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. To install Playwright browser dependencies:
   ```bash
   npx playwright install
   ```

## Running the Tests

You can run the tests using the following command:

```bash
npx playwright test
```

This will execute all the test cases listed below.

## Test Scenarios

### Valid Search Scenarios

1. **Verify search with a valid product name**:  
   Search for a product by name ("MacBook") and verify results.

2. **Verify search with partial product name**:  
   Test searching with part of a product name ("mac") to check case-insensitive matching.

3. **Verify case sensitivity in search**:  
   Test case sensitivity by searching for "macbook" and "MACBOOK".

4. **Verify search with numeric values**:  
   Test search using a numeric string ("2023").

5. **Verify empty search behavior**:  
   Test the behavior of the search when the search field is empty.

6. **Verify search result sorting and filtering**:  
   Test the sorting of results by price and filtering by the number of products displayed.

7. **Verify search with spaces before or after the query**:  
   Check the behavior when the search term has leading or trailing spaces ("    MacBook   ").

### Invalid Search Scenarios

1. **Search for a completely non-existent product**:  
   Test searching for a product that doesn’t exist ("xyz123nonexistentproduct").

2. **Search with special characters only**:  
   Test searching with special characters ("!@#$%^&*()_+").

3. **Search with excessive long text input**:  
   Test search behavior with a very long input ("Typeaaaaaaaaaaaaaaaaaaaaaaa").

4. **Search with SQL injection attempt**:  
   Test search with a potential SQL injection string ("DROP TABLE users; --").

5. **Search with JavaScript injection attempt**:  
   Test search with an attempt at JavaScript injection ("<script>alert('Hacked!')</script>").

6. **Search with HTML tags**:
   Test search with HTML tags 

7. **Search with a numeric-only value**:
   Test searching for only numeric values ("123456789").

 

 

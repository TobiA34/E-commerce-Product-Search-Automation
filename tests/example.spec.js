// @ts-check
import { test, expect } from "@playwright/test";

test.skip("Verify search with a valid product name", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "MacBook");
  await page.press('input[name="search"]', "Enter");
  await page.waitForSelector(".product-thumb", { timeout: 5000 });

  await page.pause();
});

test.skip("Verify search with an invalid product name", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "ProuctXZT546");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

test.skip("Verify search with partial product name", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "mac");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

test("Verify case sensitivity in search", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "macbook");

  await page.press('input[name="search"]', "Enter");

  await page.fill('input[name="search"]', "MACBOOK");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

test("Verify search with numeric values", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "2023");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

test("Verify empty search behavior", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

test("Verify search result sorting and filtering", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "MacBook");
  await page.waitForTimeout(1000);
  await page.press('input[name="search"]', "Enter");
  await page.waitForTimeout(1000);

  await page.waitForSelector(".product-thumb", { timeout: 5000 });
  await page.waitForTimeout(1000);
  await page.selectOption("#input-sort", { label: "Price (Low > High)" });
  await page.pause();

  await page.selectOption("#input-limit", { label: "25" });
  await page.pause();

  await page.waitForTimeout(1000);

  await page.waitForTimeout(2000);

  await page.pause();
});

test("Verify search with spaces before or after the query", async ({
  page,
}) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "    MacBook   ");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

// Invalid cases

test("Search for a completely non-existent product", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "xyz123nonexistentproduct");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});


test("Search with special characters only", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "!@#$%^&*()_+");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

test("Search with excessive long text input", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "Typeaaaaaaaaaaaaaaaaaaaaaaa");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});


test("Search with SQL injection attempt", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "DROP TABLE users; --");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

test("Search with JavaScript injection attempt", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "<script>alert('Hacked!')</script>");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});

 

test("Search with HTML tags", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', " <h1>Test</h1>");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});


test("Search with a numeric-only value", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  await page.fill('input[name="search"]', "1234567890");

  await page.press('input[name="search"]', "Enter");

  await page.pause();
});
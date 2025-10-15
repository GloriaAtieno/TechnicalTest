# TechnicalTest
These are my solutions for the technical test.  
I used **Python** for the logic, backend, and debugging parts, and **JavaScript** for the frontend.  
---

## SECTION 1: Logic & Problem Solving

### Question 1
**Task:** Return the second-largest number in a list.

**Code file:** `section1_logic.py`

**Approach:**  
I sorted the list in descending order and picked the second item.  
It’s clean and works even if there are duplicates.

---

### Question 2
**Task:** Explain how to optimize a slow-loading page.  

**Answer:**  
1. **Large Images:** Compress them with tools like TinyPNG or use WebP.  
2. **Too Many Requests:** Combine files (e.g., CSS/JS) and use caching.  
3. **Unoptimized Code:** Remove unnecessary scripts and lazy-load content.

---

## SECTION 2: Web/Software Development

### Question 3 (Frontend)
**Task:** Fetch and display user data from an API.  
**Code file:** `section2_webdev.js`

**Approach:**  
Used `fetch()` with loading and error handling. It logs the user’s name and email once the data loads.

---

### Question 4 (Backend)
**Task:** Calculate total revenue.  
**Code file:** `section2_webdev.js`

**Approach:**  
I looped through the list, multiplied price by quantity for each item, and summed it all up.

---

## SECTION 3: Debugging & Reasoning

**Code file:** `section3_debugging.py`

**Task:** Fix code that fails to remove even numbers.  

**Approach:**  
The original code removed items using indexes instead of values.  
I fixed it by looping through a copy of the list and removing even *values*.

---

## SECTION 4: Version Control & Collaboration

**Code file:** `section4_git.md`

**Answer Summary:**  
To collaborate in Git, I usually:
- Use `git clone`, `git pull`, `git commit`, and `git push` daily.
- Work on feature branches and open pull requests.
- Once, I had a merge conflict — solved it by reviewing both file versions, keeping the correct parts, then committing again.

---

**Author:** Gloria Atieno 

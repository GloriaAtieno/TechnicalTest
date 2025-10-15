# Git Collaboration

When working with a team, I usually:
1. Clone the main repo using `git clone`.
2. Create a new branch for my feature:  
   `git checkout -b feature-branch`
3. Commit and push changes:  
   `git add .`  
   `git commit -m "Added new feature"`  
   `git push origin feature-branch`
4. Open a Pull Request for review before merging.

**Common issue:** Merge conflicts.  
**Fix:** Compare both versions, keep the correct lines, then run:

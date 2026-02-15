# Laboratory Report No. 4

**Student:** Andriy Vlonha  
**Group:** 42-CS  
**Date:** 02/02/2026

---

## Objective

To learn how to work with events in React, create a StatsBar component for displaying statistics and controlling traffic light orientation. Implement JSON database usage.

---

## Procedure

---

### 1. Creating a New Project

Created a new React project named `traffic-lights-4`:

```bash
pnpm create vite@latest traffic-lights-4 -- --template react
cd traffic-lights-4
pnpm install
pnpm install prop-types
```

**Screenshot:**  
<div align="center">
  <figure>
    <img src="Images/project_create.png" width="80%" alt="Project Creation"/>
    <br/>
    <sub><b>Fig. 1:</b> Creating new project traffic-lights-4</sub>
  </figure>
</div>

---

### 2. Transferring Components from Previous Lab

Transferred components:
- `Light.jsx` and `Light.css` - light component
- `TrafficLights.jsx` and `TrafficLights.css` - traffic lights component

**Changes in TrafficLights:**
- Added `onLightClick` prop to pass click events to parent component
- Removed local `clicks` state (moved to App)

**Code: `src/components/TrafficLights.jsx`**

**Description:**
- Component now uses callback function to report clicks
- Click state is managed by parent component (App)

---

### 3. Creating StatsBar Component

**Functionality:**
- Display click statistics by color
- Button to change traffic light orientation (vertical/horizontal)
- Stylish design using CSS

**Code: `src/components/StatsBar.jsx`**

**Description:**
- Accepts `clicks` - object with click statistics
- Accepts `orientation` - current traffic light orientation
- Accepts `onOrientationChange` - callback for changing orientation
- Displays statistics with color formatting
- Button dynamically changes text and icon

**Screenshot:**  
<div align="center">
  <figure>
    <img src="Images/statsbar_component.png" width="80%" alt="StatsBar Component"/>
    <br/>
    <sub><b>Fig. 2:</b> StatsBar component with statistics and button</sub>
  </figure>
</div>

---

### 4. Integration into App Component

**Changes:**
- Added `orientation` state to manage orientation
- Added `clicks` state to count clicks
- Implemented `handleLightClick` - click handler
- Implemented `handleOrientationChange` - orientation change handler

**Code: `src/App.jsx`**

**Description:**
- App manages global application state
- Events are passed through props to child components
- Centralized state management

---

### 5. Additional Task: JSON Database

Created JSON file with traffic light data:

**File: `src/data/trafficLightsData.json`**

**Updated App.jsx with JSON Support:**

**Description:**
- Data is loaded from JSON file during initialization
- `trafficLightsData` state contains all color information
- Clicking updates corresponding `clickcount` field
- Added block for visualizing JSON data

**Screenshot:**  
<div align="center">
  <figure>
    <img src="Images/json_data_display.png" width="80%" alt="JSON Data Display"/>
    <br/>
    <sub><b>Fig. 3:</b> Displaying data from JSON database</sub>
  </figure>
</div>

---

### 6. Application Demo

**Application Screenshots:**  

<div align="center">

  <img src="Images/vertical_mode.png" width="400" />
  <p><b>Figure 4.</b> Traffic light in vertical mode</p>
  <br/>

  <img src="Images/horizontal_mode.png" width="500" />
  <p><b>Figure 5.</b> Traffic light in horizontal mode</p>
  <br/>

  <img src="Images/stats_update.png" width="600" />
  <p><b>Figure 6.</b> Real-time statistics update</p>

</div>

---

### 7. Project Structure

**Screenshot:**  
<div align="center">
  <figure>
    <img src="Images/project_structure.png" width="60%" alt="Project Structure"/>
    <br/>
    <sub><b>Fig. 7:</b> Final project structure</sub>
  </figure>
</div>

---

### 8. Running the Project

```bash
cd traffic-lights-4
pnpm run dev
```

**Screenshot:**  
<div align="center">
  <figure>
    <img src="Images/run_dev.png" width="80%" alt="Running App"/>
    <br/>
    <sub><b>Fig. 8:</b> Result of executing <code>pnpm run dev</code> command</sub>
  </figure>
</div>

---

## Results

### Implemented Features:

1. **StatsBar Component:**
   - Display click statistics for each color
   - Button to change traffic light orientation
   - Dynamic interface updates
   - Stylish design with gradients and effects

2. **Orientation Control:**
   - Toggle between vertical and horizontal modes
   - State preservation when changing orientation
   - Visual indication of current mode

3. **Centralized State Management:**
   - `clicks` and `orientation` state in App component
   - Data passing through props
   - Callback functions for events

4. **JSON Database (Additional):**
   - Structured data in JSON format
   - Dynamic data loading
   - Update `clickcount` for each color
   - Data visualization from database

### Technical Details:

- **React Hooks:** useState, useEffect
- **Props:** Passing data and callback functions
- **Event Handling:** onClick, onChange
- **State Management:** Centralized state control
- **JSON:** Working with JSON files
- **PropTypes:** Validation of complex objects
- **CSS:** Modular style organization

---

## Conclusion

During this laboratory work, I successfully:
- Created new StatsBar component for displaying statistics
- Implemented traffic light orientation change functionality
- Mastered centralized state management in React
- Implemented JSON database functionality
- Improved application architecture by lifting state up
- Used callback functions for component communication

---

## References

- GitHub Repository: [link](https://github.com/AndriyVlonha/Lab4_WEB)
- React State Documentation: https://react.dev/learn/state-a-components-memory
- Props Documentation: https://react.dev/learn/passing-props-to-a-component
- JSON in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
- React Best Practices: https://react.dev/learn/thinking-in-react

---

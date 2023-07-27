<template>
    <div class="scrollable-section">
      <div class="left">
        <div class="scrollable-content">
          <!-- Add your scrollable text content here -->
          <p v-for="line in textLines" :key="line">{{ line }}</p>
        </div>
      </div>
      <div class="right">
        <img src="./../../../assets/tubetv_trans.png" style="height: 400px;"/>
        <p>Right Side Content</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        textLines: [
          // Add your scrollable text lines here
          "Line 1",
          "Line 2",
          "Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2","Line 1",
          "Line 2"
          // ...
        ],
      };
    },
  };
  </script>
  
  <style>
  .scrollable-section {
    display: flex;
    width: 100%;
  }
  
  .left {
    flex: 1 1 80%;
    overflow-y: auto;
    padding: 10px;
  }
  
  .scrollable-content {
    /* Add any desired styling for the scrollable content here */
    /* For example: */
    max-height: 300px; 
    /* border: 1px solid #ccc; */
  }
  
  .right {
    flex: 1 1 20%;
    position: sticky;
    top: 0;
    padding: 10px;
    /* Add any desired styling for the right side here */
    /* For example: */
    /* background-color: #f0f0f0; */
  }
  </style>
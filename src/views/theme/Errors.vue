<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Error -->
    <div class="error">
      <div class="error__content">
        <h2>404</h2>
        <h3>Not found!</h3>
        <p>That you're looking for is not here</p>
        <b-button pill variant="primary" :to="{name: 'root'}">
          <div class="d-flex align-items-center">
            <arrow-left-icon class="icon-sm mr-2"></arrow-left-icon>
            <span>Home</span>
          </div>
        </b-button>
      </div>
    </div>
  </d-container>
</template>

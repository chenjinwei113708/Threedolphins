<template>
  <div></div>
</template>


<script>
export default {
  asyncData ({ app, redirect }) {
    // app.localePath('/service/bigData');
    const indexUrl = '/service/bigData';
    redirect(app.localePath ? app.localePath(indexUrl) : indexUrl);
  },
  
  // render (h) {
  //   return <div/>
  // }
}
</script>

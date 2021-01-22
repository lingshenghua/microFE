export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export const qiankun = {
  async bootstrap () {
    console.log('[umi] in qiankun')
  },

  async mount () {
    console.log('[umi] in qiankun mount')
  },

  async unmount () {
    console.log('[umi] in qiankun unmount')
  }
}


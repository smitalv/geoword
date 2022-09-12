export default new class {
    resolveHashes() {
      let urlParams = new URLSearchParams(window.location.search);
      let hashes = [];
      for (let i = 1; i <= 10; i++) {
        if (!urlParams.has(i.toString())) {
          return hashes;
        }

        hashes.push(urlParams.get(i.toString()));
      }

      return hashes;
    }
 } 
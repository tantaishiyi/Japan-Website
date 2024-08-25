<script>
  $(document).ready(function() {
    // 当页面加载完成后，执行以下代码

    // 显示欢迎内容
    $('#welcome').fadeIn(1000, function() {
      // 1 秒钟后，欢迎内容淡入完成

      // 3 秒钟后，隐藏欢迎内容并显示介绍内容
      setTimeout(function() {
        $('#welcome').fadeOut(1000, function() {
          $('#intro').fadeIn(1000, function() {
            // 3 秒钟后，介绍内容淡入完成

            // 3 秒钟后，隐藏介绍内容，依次显示各板块内容
            setTimeout(function() {
              $('#intro').fadeOut(1000, function() {
                showSections(['#tourism', '#life', '#food', '#study', '#work'], 0);
              });
            });
            }, 3000);
          });
        });
      }, 3000)}
    });

  function showSections(sections, index) {
    // 如果索引小于板块数量
    if (index < sections.length) {
      // 显示当前板块
      $(sections[index]).fadeIn(1000, function() {
        // 3 秒钟后，隐藏当前板块并显示下一个板块
        setTimeout(function() {
          $(sections[index]).fadeOut(1000, function() {
            showSections(sections, index + 1);
          });
        }, 3000);
      });

      padding-left: 15px;
      padding-right: 15px;
    }
</script>
import '../component/makeup-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';


const main = () => {
    const searchElement = document.querySelector('search-bar');
    const makeupListElement = document.querySelector('makeup-list');

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        makeupListElement.clubs = results;
    };

    const fallbackResult = message => {
        makeupListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
}


const getBlush = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeupBlush(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeupBlush = (responseJson) => {
    const listMakeupElement = document.querySelector('#blush');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
        <style>
        img {
          width: 250px;
          height: 250px;
          margin-left: 20px;
          align-items: center;
      }
      h4{
        padding-top: 20px;
        font-weight: bold;
      }
      .type{
        float: right;
        padding-right: 20px;
        ont-weight: bold;
        color: red;
        font-size: 16px;
      }
      </style>
  <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
    <div class="card">
      <div class="card-body">
      <img src="${makeup.api_featured_image}" alt="">
        <h4>Name: ${makeup.name}</h5>
        <h6>Brand: ${makeup.brand}</h4>
        <p class="type">${makeup.price_sign}${makeup.price}</p>
        <p>Type Product: ${makeup.product_type}</p>
        <p>Description: ${makeup.description}</p>
        <p>Tags: ${makeup.tag_list}</p>
      </div>
    </div>
  </div>
`;
    });
};

const getBronzer = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeupBronzer(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeupBronzer = (responseJson) => {
    const listMakeupElement = document.querySelector('#bronzer');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
      <style>
      img {
        width: 250px;
        height: 250px;
        margin-left: 20px;
        align-items: center;
    }
    h4{
        padding-top: 20px;
        font-weight: bold;
      }
      .type{
        float: right;
        padding-right: 20px;
        ont-weight: bold;
        color: red;
        font-size: 16px;
      }
      </style>
  <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
    <div class="card">
      <div class="card-body">
      <img src="${makeup.api_featured_image}" alt="">
        <h4>Name: ${makeup.name}</h5>
        <h6>Brand: ${makeup.brand}</h4>
        <p class="type">${makeup.price_sign}${makeup.price}</p>
        <p>Type Product: ${makeup.product_type}</p>
        <p>Description: ${makeup.description}</p>
        <p>Tags: ${makeup.tag_list}</p>
      </div>
    </div>
  </div>
`;
    });
};
const geteyebrow = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeupEyebrow(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeupEyebrow = (responseJson) => {
    const listMakeupElement = document.querySelector('#eyebrow');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
    <style>
    img {
      width: 250px;
      height: 250px;
      margin-left: 20px;
      align-items: center;
  }h4{
    padding-top: 20px;
    font-weight: bold;
  }
  .type{
    float: right;
    padding-right: 20px;
    ont-weight: bold;
    color: red;
    font-size: 16px;
  }
  </style>
<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
<div class="card">
  <div class="card-body">
  <img src="${makeup.api_featured_image}" alt="">
    <h4>Name: ${makeup.name}</h5>
    <h6>Brand: ${makeup.brand}</h4>
    <p class="type">${makeup.price_sign}${makeup.price}</p>
    <p>Type Product: ${makeup.product_type}</p>
    <p>Description: ${makeup.description}</p>
    <p>Tags: ${makeup.tag_list}</p>
  </div>
</div>
</div>
`;
    });
};
const geteyeliner = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeupEyeliner(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeupEyeliner = (responseJson) => {
    const listMakeupElement = document.querySelector('#eyeliner');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
  <style>
  img {
    width: 250px;
    height: 250px;
    margin-left: 20px;
    align-items: center;
}h4{
    padding-top: 20px;
    font-weight: bold;
  }
  .type{
    float: right;
    padding-right: 20px;
    ont-weight: bold;
    color: red;
    font-size: 16px;
  }
  </style>
<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
<div class="card">
  <div class="card-body">
  <img src="${makeup.api_featured_image}" alt="">
    <h4>Name: ${makeup.name}</h5>
    <h6>Brand: ${makeup.brand}</h4>
    <p class="type">${makeup.price_sign}${makeup.price}</p>
    <p>Type Product: ${makeup.product_type}</p>
    <p>Description: ${makeup.description}</p>
    <p>Tags: ${makeup.tag_list}</p>
  </div>
</div>
</div>
`;
    });
};
const geteyeshadow = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeupEyeshadow(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeupEyeshadow = (responseJson) => {
    const listMakeupElement = document.querySelector('#eyeshadow');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
  <style>
  img {
    width: 250px;
    height: 250px;
    margin-left: 20px;
    align-items: center;
}h4{
    padding-top: 20px;
    font-weight: bold;
  }
  .type{
    float: right;
    padding-right: 20px;
    ont-weight: bold;
    color: red;
    font-size: 16px;
  }
  </style>
<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
<div class="card">
  <div class="card-body">
  <img src="${makeup.api_featured_image}" alt="">
    <h4>Name: ${makeup.name}</h5>
    <h6>Brand: ${makeup.brand}</h4>
    <p class="type">${makeup.price_sign}${makeup.price}</p>
    <p>Type Product: ${makeup.product_type}</p>
    <p>Description: ${makeup.description}</p>
    <p>Tags: ${makeup.tag_list}</p>
  </div>
</div>
</div>
`;
    });
};
const getfoundation = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeupFoundation(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeupFoundation = (responseJson) => {
    const listMakeupElement = document.querySelector('#foundation');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
  <style>
  img {
    width: 250px;
    height: 250px;
    margin-left: 20px;
    align-items: center;
}h4{
    padding-top: 20px;
    font-weight: bold;
  }
  .type{
    float: right;
    padding-right: 20px;
    ont-weight: bold;
    color: red;
    font-size: 16px;
  }
  </style>
<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
<div class="card">
  <div class="card-body">
  <img src="${makeup.api_featured_image}" alt="">
    <h4>Name: ${makeup.name}</h5>
    <h6>Brand: ${makeup.brand}</h4>
    <p class="type">${makeup.price_sign}${makeup.price}</p>
    <p>Type Product: ${makeup.product_type}</p>
    <p>Description: ${makeup.description}</p>
    <p>Tags: ${makeup.tag_list}</p>
  </div>
</div>
</div>
`;
    });
};
const getlipliner = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeupLipliner(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeupLipliner = (responseJson) => {
    const listMakeupElement = document.querySelector('#lip_liner');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
  <style>
  img {
    width: 250px;
    height: 250px;
    margin-left: 20px;
    align-items: center;
}h4{
    padding-top: 20px;
    font-weight: bold;
  }
  .type{
    float: right;
    padding-right: 20px;
    ont-weight: bold;
    color: red;
    font-size: 16px;
  }
  </style>
<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
<div class="card">
  <div class="card-body">
  <img src="${makeup.api_featured_image}" alt="">
    <h4>Name: ${makeup.name}</h5>
    <h6>Brand: ${makeup.brand}</h4>
    <p class="type">${makeup.price_sign}${makeup.price}</p>
    <p>Type Product: ${makeup.product_type}</p>
    <p>Description: ${makeup.description}</p>
    <p>Tags: ${makeup.tag_list}</p>
  </div>
</div>
</div>
`;
    });
};
const getlipstick = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeuplipstick(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeuplipstick = (responseJson) => {
    const listMakeupElement = document.querySelector('#lipstick');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
  <style>
  img {
    width: 250px;
    height: 250px;
    margin-left: 20px;
    align-items: center;
}h4{
    padding-top: 20px;
    font-weight: bold;
  }
  .type{
    float: right;
    padding-right: 20px;
    ont-weight: bold;
    color: red;
    font-size: 16px;
  }
  </style>
<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
<div class="card">
  <div class="card-body">
  <img src="${makeup.api_featured_image}" alt="">
    <h4>Name: ${makeup.name}</h5>
    <h6>Brand: ${makeup.brand}</h4>
    <p class="type">${makeup.price_sign}${makeup.price}</p>
    <p>Type Product: ${makeup.product_type}</p>
    <p>Description: ${makeup.description}</p>
    <p>Tags: ${makeup.tag_list}</p>
  </div>
</div>
</div>
`;
    });
};
const getMascara = () => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Membuat GET request dan menetapkan target URL
    xhr.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara');

    //menetapkan callback jika response sukses dan error
    xhr.onload =
        () => {
            const responseJson = JSON.parse(xhr.response);
            RenderAllMakeupMascara(responseJson);
        }

    xhr.onerror = function() {
        const showResponseMessage = (message = 'Masih Blom Bisa mas Ikbal Semangat') => {
            alert(message);
        };
        showResponseMessage();
    };

    // Mengirimkan request
    xhr.send();
};
const RenderAllMakeupMascara = (responseJson) => {
    const listMakeupElement = document.querySelector('#mascara');
    listMakeupElement.innerHTML = '';
    responseJson.forEach(makeup => {
        listMakeupElement.innerHTML += `
  <style>
  img {
    width: 250px;
    height: 250px;
    margin-left: 20px;
    align-items: center;
}h4{
    padding-top: 20px;
    font-weight: bold;
  }
  .type{
    float: right;
    padding-right: 20px;
    ont-weight: bold;
    color: red;
    font-size: 16px;
  }
  </style>
<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
<div class="card">
  <div class="card-body">
  <img src="${makeup.api_featured_image}" alt="">
    <h4>Name: ${makeup.name}</h5>
    <h6>Brand: ${makeup.brand}</h4>
    <p class="type">${makeup.price_sign}${makeup.price}</p>
    <p>Type Product: ${makeup.product_type}</p>
    <p>Description: ${makeup.description}</p>
    <p>Tags: ${makeup.tag_list}</p>
  </div>
</div>
</div>
`;
    });
};
document.addEventListener('DOMContentLoaded', () => {
    getBlush();
    getBronzer();
    geteyebrow();
    geteyeliner();
    geteyeshadow();
    getfoundation();
    getlipliner();
    getlipstick();
    getmascara();
});


export default (main);
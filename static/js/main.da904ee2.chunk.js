(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=a(37),i=(a(24),a(38)),s=a(18),m=a(36),u=a(10),d=a(4),b=a(5),f=a(7),v=a(6),h=function(e){var t=e.name,a=e.label,n=e.value,c=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{autoFocus:!0,id:t,name:t,type:"text",className:"form-control",value:n,onChange:c}))},p=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={account:{username:"",password:""}},e.handleSubmit=function(e){e.preventDefault()},e.handleChange=function(t){var a=t.currentTarget,n=Object(u.a)({},e.state.account);n[a.name]=a.value,e.setState({account:n})},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state.account;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(h,{name:"username",label:"Username:",value:e.username,onChange:this.handleChange}),r.a.createElement(h,{name:"password",label:"Password:",value:e.password,onChange:this.handleChange}),r.a.createElement("button",{className:"btn btn-primary"},"Login")))}}]),a}(n.Component),g=function(e){var t=e.match,a=e.history;return r.a.createElement("div",null,r.a.createElement("h1",null,"MovieForm: ",t.params.id),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.push("/movies")}},"Save"))},E=function(){return r.a.createElement("h1",null,"Customers")},y=function(){return r.a.createElement("h1",null,"Not Found")},k=function(){return r.a.createElement("h1",null,"Rentals")},C=a(15),S=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var N=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5,liked:!0},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var _=a(8),O=a.n(_),j=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,c=e.onPageChange,l=Math.ceil(t/a);if(1===l)return null;var o=O.a.range(1,l+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},o.map((function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){return c(e)}},e))}))))};function R(e,t,a){var n=(t-1)*a;return O()(e).slice(n).take(a).value()}var P=function(e){var t=e.items,a=e.onItemSelect,n=e.textProperty,c=e.valueProperty,l=e.selectedItem;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{onClick:function(){return a(e)},key:e[c],className:e===l?"list-group-item active":"list-group-item",style:{cursor:"pointer"}},e[n])})))};P.defaultProps={textProperty:"name",valueProperty:"_id"};var I=P,w=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{className:t,"aria-hidden":"true",style:{cursor:"pointer"},onClick:e.onClick})},T=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).raiseSort=function(t){var a=Object(u.a)({},e.props.sortColumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))}))))}}]),a}(n.Component),A=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderCall=function(e,t){return t.content?t.content(e):O.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCall(t,a))})))})))}}]),a}(n.Component),D=function(e){var t=e.columns,a=e.sortColumn,n=e.data,c=e.onSort;return r.a.createElement("table",{className:"table"},r.a.createElement(T,{columns:t,sortColumn:a,onSort:c}),r.a.createElement(A,{columns:t,data:n}))},G=a(14),x=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(G.a,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(w,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}},{key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm"},"Delete")}}],e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.sortColumn,n=e.onSort;return r.a.createElement(D,{columns:this.columns,data:t,sortColumn:a,onSort:n})}}]),a}(n.Component),L=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],genres:[],selectedGenre:null,currentPage:1,pageSize:4,sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(t){var a=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:a})},e.handleLike=function(t){var a=Object(C.a)(e.state.movies),n=a.indexOf(t);a[n]=Object(u.a)({},a[n]),a[n].liked=!a[n].liked,e.setState({movies:a})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPagedData=function(){var t=e.state,a=t.pageSize,n=t.currentPage,r=t.selectedGenre,c=t.movies,l=t.sortColumn,o=r&&r._id?c.filter((function(e){return e.genre._id===r._id})):c;return{data:R(O.a.orderBy(o,[l.path],[l.order]),n,a),totalCount:o.length}},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=[{_id:"",name:"All Movies"}].concat(Object(C.a)(S.filter((function(e){return e}))));this.setState({movies:N,genres:e})}},{key:"render",value:function(){var e=this.state.movies.length,t=this.state,a=t.pageSize,n=t.currentPage,c=t.sortColumn;if(0===e)return r.a.createElement("p",null,"There are no movies in the database");var l=this.getPagedData(),o=l.totalCount,i=l.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(I,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Showing ",o," movies int the database."),r.a.createElement(x,{movies:i,onLike:this.handleLike,sortColumn:c,onDelete:this.handleDelete,onSort:this.handleSort}),r.a.createElement(j,{itemsCount:o,pageSize:a,currentPage:n,onPageChange:this.handlePageChange})))}}]),a}(n.Component),M=a(35),z=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(G.a,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/movies"},"Movies")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/customers"},"Customers")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/rentals"},"Rentals")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/login"},"Login")))))};a(30);var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement("main",{className:"container"},r.a.createElement(i.a,null,r.a.createElement(s.a,{path:"/login",component:p}),r.a.createElement(s.a,{path:"/movies/:id",component:g}),r.a.createElement(s.a,{path:"/movies",component:L}),r.a.createElement(s.a,{path:"/customers",component:E}),r.a.createElement(s.a,{path:"/rentals",component:k}),r.a.createElement(s.a,{path:"/not-found",component:y}),r.a.createElement(m.a,{exact:!0,from:"/",to:"/movies"}),r.a.createElement(m.a,{to:"/not-found"}))))};a(31),a(32);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(F,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.da904ee2.chunk.js.map
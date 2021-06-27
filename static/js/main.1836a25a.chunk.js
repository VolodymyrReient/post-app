(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(11),o=n.n(c),r=(n(16),n(7)),l=n(8),s=n(3),u=n(4),d=n(2),b=n(6),j=n(5),h=n(9),f=n.n(h),p=(n(17),n(0)),m=function(t){var e=t.allPost,n=t.liked;return Object(p.jsxs)("div",{className:"app-header d-flex",children:[Object(p.jsx)("h1",{children:"Volodymyr Reient"}),Object(p.jsxs)("h2",{children:[e," records, like ",n]})]})},O=(n(19),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return Object(p.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"Search by records",onChange:this.onUpdateSearch})}}]),n}(a.Component)),g=(n(20),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"All"},{name:"liked",label:"Liked"}],a}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,a=e.label,i=t.props.filter===n?"btn-info":"btn-outline-secondary";return Object(p.jsx)("button",{type:"button",className:"btn ".concat(i),onClick:function(){return t.props.onFilterSelect(n)},children:a},n)}));return Object(p.jsx)("div",{className:"btn-group",children:e})}}]),n}(a.Component)),v=(n(21),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,a=t.onToggleLiked,i=t.onToggleImportant,c=t.like,o="app-list-item d-flex justify-content-between";return t.important&&(o+=" important"),c&&(o+=" like"),Object(p.jsxs)("div",{className:o,children:[Object(p.jsx)("span",{className:"app-list-item-label",onClick:a,children:e}),Object(p.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(p.jsx)("button",{className:"btn-star btn-sm",onClick:i,children:Object(p.jsx)("i",{className:"fas fa-star"})}),Object(p.jsx)("button",{className:"btn-trash btn-sm",onClick:n,children:Object(p.jsx)("i",{className:"fas fa-trash"})}),Object(p.jsx)("i",{className:"fas fa-heart"})]})]})}}]),n}(a.Component)),k=(n(22),function(t){var e=t.posts,n=t.onDelete,a=t.onToggleLiked,i=t.onToggleImportant,c=e.map((function(t){return Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsx)(v,Object(r.a)(Object(r.a)({},t),{},{onDelete:function(){return n(t.id)},onToggleImportant:function(){return i(t.id)},onToggleLiked:function(){return a(t.id)}}))},t.id)}));return Object(p.jsx)("ul",{className:"app-list list-group",children:c})}),x=(n(23),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(p.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(p.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"What are you thinking about now?",onChange:this.onValueChange,value:this.state.text}),Object(p.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"Add Post"})]})}}]),n}(a.Component)),y=(n(24),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={data:[{label:"Going to learn React",important:!1,like:!1,id:f()()},{label:"That is so good",important:!1,like:!1,id:f()()},{label:"I need a break...",important:!1,like:!1,id:f()()}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(d.a)(a)),a.addItem=a.addItem.bind(Object(d.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(d.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(d.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(d.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:f()()};this.setState((function(t){var n=t.data;return{data:[].concat(Object(l.a)(n),[e])}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{important:!i.important});return{data:[].concat(Object(l.a)(n.slice(0,a)),[c],Object(l.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{like:!i.like});return{data:[].concat(Object(l.a)(n.slice(0,a)),[c],Object(l.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"filterPost",value:function(t,e){switch(e){case"liked":return t.filter((function(t){return t.like}));default:return t}}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state.data.filter((function(t){return t.like})).length,e=this.state.data.length,n=this.filterPost(this.searchPost(this.state.data,this.state.term),this.state.filter);return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(m,{liked:t,allPost:e}),Object(p.jsxs)("div",{className:"search-panel d-flex",children:[Object(p.jsx)(O,{onUpdateSearch:this.onUpdateSearch}),Object(p.jsx)(g,{filter:this.state.filter,onFilterSelect:this.onFilterSelect})]}),Object(p.jsx)(k,{posts:n,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),Object(p.jsx)(x,{onAdd:this.addItem})]})}}]),n}(a.Component));o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.1836a25a.chunk.js.map
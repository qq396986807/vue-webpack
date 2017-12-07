<template>
  <Header class="header">
    <Row>
        <Col span="6"><Icon type="navicon-round my-content" size=25></Icon></Col>
        <Col class="tit" span="12">头条</Col>
        <Col span="6">
          <Icon class="add-c" type="plus" size=25></Icon>
          <Icon class="search" type="search" size=25></Icon>
        </Col>
    </Row>
  </Header>
</template>

<style media="screen">
  .my-content{
    margin: 10% 0 2% 10%
  }
  .tit{
    font-weight: 900;
    text-align: center;
    font-size: 1.1rem;
    margin-top:2%;
  }
  .add-c{
    margin:10% 0 0 30%
  }
  .search{
    margin: 0 10% 0 10%
  }
</style>

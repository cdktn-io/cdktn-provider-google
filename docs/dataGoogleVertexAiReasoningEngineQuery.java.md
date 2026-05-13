# `dataGoogleVertexAiReasoningEngineQuery` Submodule <a name="`dataGoogleVertexAiReasoningEngineQuery` Submodule" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiReasoningEngineQuery <a name="DataGoogleVertexAiReasoningEngineQuery" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query google_vertex_ai_reasoning_engine_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vertex_ai_reasoning_engine_query.DataGoogleVertexAiReasoningEngineQuery;

DataGoogleVertexAiReasoningEngineQuery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .reasoningEngineId(java.lang.String)
    .region(java.lang.String)
//  .classMethod(java.lang.String)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.reasoningEngineId">reasoningEngineId</a></code> | <code>java.lang.String</code> | The id of the Vertex Agent Engine to query. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.classMethod">classMethod</a></code> | <code>java.lang.String</code> | Class method to be used for the query. It is optional and defaults to "query" if unspecified. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.input">input</a></code> | <code>java.lang.String</code> | Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc.. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project of the resource. If not provided, the provider default project is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `reasoningEngineId`<sup>Required</sup> <a name="reasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.reasoningEngineId"></a>

- *Type:* java.lang.String

The id of the Vertex Agent Engine to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#reasoning_engine_id DataGoogleVertexAiReasoningEngineQuery#reasoning_engine_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#region DataGoogleVertexAiReasoningEngineQuery#region}

---

##### `classMethod`<sup>Optional</sup> <a name="classMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.classMethod"></a>

- *Type:* java.lang.String

Class method to be used for the query. It is optional and defaults to "query" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#class_method DataGoogleVertexAiReasoningEngineQuery#class_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.input"></a>

- *Type:* java.lang.String

Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#input DataGoogleVertexAiReasoningEngineQuery#input}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project of the resource. If not provided, the provider default project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#project DataGoogleVertexAiReasoningEngineQuery#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod">resetClassMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClassMethod` <a name="resetClassMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetClassMethod"></a>

```java
public void resetClassMethod()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetInput"></a>

```java
public void resetInput()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_vertex_ai_reasoning_engine_query.DataGoogleVertexAiReasoningEngineQuery;

DataGoogleVertexAiReasoningEngineQuery.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_vertex_ai_reasoning_engine_query.DataGoogleVertexAiReasoningEngineQuery;

DataGoogleVertexAiReasoningEngineQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_vertex_ai_reasoning_engine_query.DataGoogleVertexAiReasoningEngineQuery;

DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_vertex_ai_reasoning_engine_query.DataGoogleVertexAiReasoningEngineQuery;

DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleVertexAiReasoningEngineQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleVertexAiReasoningEngineQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleVertexAiReasoningEngineQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiReasoningEngineQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output">output</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput">classMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput">inputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput">reasoningEngineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod">classMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId">reasoningEngineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.output"></a>

```java
public java.lang.String getOutput();
```

- *Type:* java.lang.String

---

##### `classMethodInput`<sup>Optional</sup> <a name="classMethodInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethodInput"></a>

```java
public java.lang.String getClassMethodInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.inputInput"></a>

```java
public java.lang.String getInputInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reasoningEngineIdInput`<sup>Optional</sup> <a name="reasoningEngineIdInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineIdInput"></a>

```java
public java.lang.String getReasoningEngineIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `classMethod`<sup>Required</sup> <a name="classMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.classMethod"></a>

```java
public java.lang.String getClassMethod();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reasoningEngineId`<sup>Required</sup> <a name="reasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.reasoningEngineId"></a>

```java
public java.lang.String getReasoningEngineId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiReasoningEngineQueryConfig <a name="DataGoogleVertexAiReasoningEngineQueryConfig" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vertex_ai_reasoning_engine_query.DataGoogleVertexAiReasoningEngineQueryConfig;

DataGoogleVertexAiReasoningEngineQueryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .reasoningEngineId(java.lang.String)
    .region(java.lang.String)
//  .classMethod(java.lang.String)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId">reasoningEngineId</a></code> | <code>java.lang.String</code> | The id of the Vertex Agent Engine to query. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region">region</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod">classMethod</a></code> | <code>java.lang.String</code> | Class method to be used for the query. It is optional and defaults to "query" if unspecified. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input">input</a></code> | <code>java.lang.String</code> | Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc.. |
| <code><a href="#@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project of the resource. If not provided, the provider default project is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `reasoningEngineId`<sup>Required</sup> <a name="reasoningEngineId" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.reasoningEngineId"></a>

```java
public java.lang.String getReasoningEngineId();
```

- *Type:* java.lang.String

The id of the Vertex Agent Engine to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#reasoning_engine_id DataGoogleVertexAiReasoningEngineQuery#reasoning_engine_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#region DataGoogleVertexAiReasoningEngineQuery#region}

---

##### `classMethod`<sup>Optional</sup> <a name="classMethod" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.classMethod"></a>

```java
public java.lang.String getClassMethod();
```

- *Type:* java.lang.String

Class method to be used for the query. It is optional and defaults to "query" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#class_method DataGoogleVertexAiReasoningEngineQuery#class_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#id DataGoogleVertexAiReasoningEngineQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

Input content provided by users in JSON object format. Examples include text query, function calling parameters, media bytes, etc..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#input DataGoogleVertexAiReasoningEngineQuery#input}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVertexAiReasoningEngineQuery.DataGoogleVertexAiReasoningEngineQueryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project of the resource. If not provided, the provider default project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vertex_ai_reasoning_engine_query#project DataGoogleVertexAiReasoningEngineQuery#project}

---




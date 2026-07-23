# `dataGoogleCloudRunV2WorkerPool` Submodule <a name="`dataGoogleCloudRunV2WorkerPool` Submodule" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudRunV2WorkerPool <a name="DataGoogleCloudRunV2WorkerPool" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool google_cloud_run_v2_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPool;

DataGoogleCloudRunV2WorkerPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the WorkerPool. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#id DataGoogleCloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#project DataGoogleCloudRunV2WorkerPool#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#name DataGoogleCloudRunV2WorkerPool#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#id DataGoogleCloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#location DataGoogleCloudRunV2WorkerPool#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#project DataGoogleCloudRunV2WorkerPool#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudRunV2WorkerPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPool;

DataGoogleCloudRunV2WorkerPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPool;

DataGoogleCloudRunV2WorkerPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPool;

DataGoogleCloudRunV2WorkerPool.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPool;

DataGoogleCloudRunV2WorkerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudRunV2WorkerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleCloudRunV2WorkerPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudRunV2WorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudRunV2WorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudRunV2WorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.annotations">annotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList">DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.client">client</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList">DataGoogleCloudRunV2WorkerPoolConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.customAudiences">customAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deletionProtection">deletionProtection</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.instanceSplits">instanceSplits</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList">DataGoogleCloudRunV2WorkerPoolInstanceSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.instanceSplitStatuses">instanceSplitStatuses</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList">DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.labels">labels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.lastModifier">lastModifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.latestCreatedRevision">latestCreatedRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.latestReadyRevision">latestReadyRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.observedGeneration">observedGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.reconciling">reconciling</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.scaling">scaling</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList">DataGoogleCloudRunV2WorkerPoolScalingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.template">template</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList">DataGoogleCloudRunV2WorkerPoolTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList">DataGoogleCloudRunV2WorkerPoolTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.binaryAuthorization"></a>

```java
public DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList getBinaryAuthorization();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList">DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList</a>

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.conditions"></a>

```java
public DataGoogleCloudRunV2WorkerPoolConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList">DataGoogleCloudRunV2WorkerPoolConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `customAudiences`<sup>Required</sup> <a name="customAudiences" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.customAudiences"></a>

```java
public java.util.List<java.lang.String> getCustomAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `instanceSplits`<sup>Required</sup> <a name="instanceSplits" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.instanceSplits"></a>

```java
public DataGoogleCloudRunV2WorkerPoolInstanceSplitsList getInstanceSplits();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList">DataGoogleCloudRunV2WorkerPoolInstanceSplitsList</a>

---

##### `instanceSplitStatuses`<sup>Required</sup> <a name="instanceSplitStatuses" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.instanceSplitStatuses"></a>

```java
public DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList getInstanceSplitStatuses();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList">DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `lastModifier`<sup>Required</sup> <a name="lastModifier" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.lastModifier"></a>

```java
public java.lang.String getLastModifier();
```

- *Type:* java.lang.String

---

##### `latestCreatedRevision`<sup>Required</sup> <a name="latestCreatedRevision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.latestCreatedRevision"></a>

```java
public java.lang.String getLatestCreatedRevision();
```

- *Type:* java.lang.String

---

##### `latestReadyRevision`<sup>Required</sup> <a name="latestReadyRevision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.latestReadyRevision"></a>

```java
public java.lang.String getLatestReadyRevision();
```

- *Type:* java.lang.String

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.observedGeneration"></a>

```java
public java.lang.String getObservedGeneration();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.scaling"></a>

```java
public DataGoogleCloudRunV2WorkerPoolScalingList getScaling();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList">DataGoogleCloudRunV2WorkerPoolScalingList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.template"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateList getTemplate();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList">DataGoogleCloudRunV2WorkerPoolTemplateList</a>

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terminalCondition"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTerminalConditionList getTerminalCondition();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList">DataGoogleCloudRunV2WorkerPoolTerminalConditionList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudRunV2WorkerPoolBinaryAuthorization <a name="DataGoogleCloudRunV2WorkerPoolBinaryAuthorization" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization;

DataGoogleCloudRunV2WorkerPoolBinaryAuthorization.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolConditions <a name="DataGoogleCloudRunV2WorkerPoolConditions" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolConditions;

DataGoogleCloudRunV2WorkerPoolConditions.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolConfig <a name="DataGoogleCloudRunV2WorkerPoolConfig" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolConfig;

DataGoogleCloudRunV2WorkerPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the WorkerPool. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#id DataGoogleCloudRunV2WorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run worker pool. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#project DataGoogleCloudRunV2WorkerPool#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the WorkerPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#name DataGoogleCloudRunV2WorkerPool#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#id DataGoogleCloudRunV2WorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the cloud run worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#location DataGoogleCloudRunV2WorkerPool#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/cloud_run_v2_worker_pool#project DataGoogleCloudRunV2WorkerPool#project}.

---

### DataGoogleCloudRunV2WorkerPoolInstanceSplits <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplits" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolInstanceSplits;

DataGoogleCloudRunV2WorkerPoolInstanceSplits.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses;

DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolScaling <a name="DataGoogleCloudRunV2WorkerPoolScaling" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolScaling;

DataGoogleCloudRunV2WorkerPoolScaling.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplate <a name="DataGoogleCloudRunV2WorkerPoolTemplate" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplate;

DataGoogleCloudRunV2WorkerPoolTemplate.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainers <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainers;

DataGoogleCloudRunV2WorkerPoolTemplateContainers.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv;

DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource;

DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef;

DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe;

DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc;

DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet;

DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders;

DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket;

DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersResources <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersResources" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources;

DataGoogleCloudRunV2WorkerPoolTemplateContainersResources.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe;

DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc;

DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet;

DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders;

DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket;

DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts;

DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector <a name="DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector;

DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumes <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumes" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes;

DataGoogleCloudRunV2WorkerPoolTemplateVolumes.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance;

DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir;

DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs;

DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs;

DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret;

DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems;

DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess;

DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces;

DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces.builder()
    .build();
```


### DataGoogleCloudRunV2WorkerPoolTerminalCondition <a name="DataGoogleCloudRunV2WorkerPoolTerminalCondition" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTerminalCondition;

DataGoogleCloudRunV2WorkerPoolTerminalCondition.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList <a name="DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList;

new DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference <a name="DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference;

new DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification">breakglassJustification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault">useDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization">DataGoogleCloudRunV2WorkerPoolBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `breakglassJustification`<sup>Required</sup> <a name="breakglassJustification" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```java
public java.lang.String getBreakglassJustification();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.useDefault"></a>

```java
public IResolvable getUseDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorizationOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolBinaryAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolBinaryAuthorization">DataGoogleCloudRunV2WorkerPoolBinaryAuthorization</a>

---


### DataGoogleCloudRunV2WorkerPoolConditionsList <a name="DataGoogleCloudRunV2WorkerPoolConditionsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolConditionsList;

new DataGoogleCloudRunV2WorkerPoolConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolConditionsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolConditionsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference;

new DataGoogleCloudRunV2WorkerPoolConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.executionReason">executionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason">revisionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions">DataGoogleCloudRunV2WorkerPoolConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.executionReason"></a>

```java
public java.lang.String getExecutionReason();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.revisionReason"></a>

```java
public java.lang.String getRevisionReason();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditionsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolConditions">DataGoogleCloudRunV2WorkerPoolConditions</a>

---


### DataGoogleCloudRunV2WorkerPoolInstanceSplitsList <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList;

new DataGoogleCloudRunV2WorkerPoolInstanceSplitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference;

new DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits">DataGoogleCloudRunV2WorkerPoolInstanceSplits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolInstanceSplits getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplits">DataGoogleCloudRunV2WorkerPoolInstanceSplits</a>

---


### DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList;

new DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference <a name="DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference;

new DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses">DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatusesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses">DataGoogleCloudRunV2WorkerPoolInstanceSplitStatuses</a>

---


### DataGoogleCloudRunV2WorkerPoolScalingList <a name="DataGoogleCloudRunV2WorkerPoolScalingList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolScalingList;

new DataGoogleCloudRunV2WorkerPoolScalingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolScalingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolScalingOutputReference <a name="DataGoogleCloudRunV2WorkerPoolScalingOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference;

new DataGoogleCloudRunV2WorkerPoolScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount">manualInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling">DataGoogleCloudRunV2WorkerPoolScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manualInstanceCount`<sup>Required</sup> <a name="manualInstanceCount" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.manualInstanceCount"></a>

```java
public java.lang.Number getManualInstanceCount();
```

- *Type:* java.lang.Number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.scalingMode"></a>

```java
public java.lang.String getScalingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScalingOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolScaling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolScaling">DataGoogleCloudRunV2WorkerPoolScaling</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.valueSource"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList getValueSource();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnv</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList getSecretKeyRef();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSource</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpc</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeaders</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGet</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.grpc"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList getGrpc();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeGrpcList</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.httpGet"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList getHttpGet();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeHttpGetList</a>

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.tcpSocket"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList getTcpSocket();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList</a>

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbe</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeTcpSocket</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList">DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList">DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers">DataGoogleCloudRunV2WorkerPoolTemplateContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.env"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList getEnv();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList">DataGoogleCloudRunV2WorkerPoolTemplateContainersEnvList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.livenessProbe"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList getLivenessProbe();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList">DataGoogleCloudRunV2WorkerPoolTemplateContainersLivenessProbeList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.resources"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList getResources();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList">DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.startupProbe"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList getStartupProbe();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.volumeMounts"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList getVolumeMounts();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList">DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList</a>

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainers">DataGoogleCloudRunV2WorkerPoolTemplateContainers</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources">DataGoogleCloudRunV2WorkerPoolTemplateContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.limits"></a>

```java
public StringMap getLimits();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResourcesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersResources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersResources">DataGoogleCloudRunV2WorkerPoolTemplateContainersResources</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpc</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeaders</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGet</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.grpc"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList getGrpc();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeGrpcList</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList getHttpGet();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeHttpGetList</a>

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList getTcpSocket();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList</a>

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbe</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket">DataGoogleCloudRunV2WorkerPoolTemplateContainersStartupProbeTcpSocket</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.subPath">subPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `subPath`<sup>Required</sup> <a name="subPath" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.subPath"></a>

```java
public java.lang.String getSubPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts">DataGoogleCloudRunV2WorkerPoolTemplateContainersVolumeMounts</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateList <a name="DataGoogleCloudRunV2WorkerPoolTemplateList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateList;

new DataGoogleCloudRunV2WorkerPoolTemplateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList <a name="DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList;

new DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator">accelerator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector">DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accelerator`<sup>Required</sup> <a name="accelerator" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.accelerator"></a>

```java
public java.lang.String getAccelerator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector">DataGoogleCloudRunV2WorkerPoolTemplateNodeSelector</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotations">annotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.client">client</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled">gpuZonalRedundancyDisabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labels">labels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector">nodeSelector</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList">DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate">DataGoogleCloudRunV2WorkerPoolTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.containers"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateContainersList getContainers();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateContainersList">DataGoogleCloudRunV2WorkerPoolTemplateContainersList</a>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `encryptionKeyRevocationAction`<sup>Required</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyRevocationAction"></a>

```java
public java.lang.String getEncryptionKeyRevocationAction();
```

- *Type:* java.lang.String

---

##### `encryptionKeyShutdownDuration`<sup>Required</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.encryptionKeyShutdownDuration"></a>

```java
public java.lang.String getEncryptionKeyShutdownDuration();
```

- *Type:* java.lang.String

---

##### `gpuZonalRedundancyDisabled`<sup>Required</sup> <a name="gpuZonalRedundancyDisabled" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.gpuZonalRedundancyDisabled"></a>

```java
public IResolvable getGpuZonalRedundancyDisabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `nodeSelector`<sup>Required</sup> <a name="nodeSelector" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.nodeSelector"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList getNodeSelector();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList">DataGoogleCloudRunV2WorkerPoolTemplateNodeSelectorList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.volumes"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesList getVolumes();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesList</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.vpcAccess"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList getVpcAccess();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplate">DataGoogleCloudRunV2WorkerPoolTemplate</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance">DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstance</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```java
public java.lang.String getSizeLimit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir">DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDir</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly">readOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs">DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.readOnly"></a>

```java
public IResolvable getReadOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs">DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcs</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly">readOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs">DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.readOnly"></a>

```java
public IResolvable getReadOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs">DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfs</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes">DataGoogleCloudRunV2WorkerPoolTemplateVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList getCloudSqlInstance();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesCloudSqlInstanceList</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.emptyDir"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList getEmptyDir();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesEmptyDirList</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.gcs"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList getGcs();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesGcsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.nfs"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList getNfs();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesNfsList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.secret"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList getSecret();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumes">DataGoogleCloudRunV2WorkerPoolTemplateVolumes</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItems</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```java
public java.lang.Number getDefaultMode();
```

- *Type:* java.lang.Number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.items"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList getItems();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretItemsList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecretOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret">DataGoogleCloudRunV2WorkerPoolTemplateVolumesSecret</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList;

new DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList;

new DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfaces</a>

---


### DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference;

new DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.connector">connector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.connector"></a>

```java
public java.lang.String getConnector();
```

- *Type:* java.lang.String

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.egress"></a>

```java
public java.lang.String getEgress();
```

- *Type:* java.lang.String

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessNetworkInterfacesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccessOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess">DataGoogleCloudRunV2WorkerPoolTemplateVpcAccess</a>

---


### DataGoogleCloudRunV2WorkerPoolTerminalConditionList <a name="DataGoogleCloudRunV2WorkerPoolTerminalConditionList" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList;

new DataGoogleCloudRunV2WorkerPoolTerminalConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.get"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference <a name="DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_run_v2_worker_pool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference;

new DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason">executionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason">revisionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition">DataGoogleCloudRunV2WorkerPoolTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.executionReason"></a>

```java
public java.lang.String getExecutionReason();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.revisionReason"></a>

```java
public java.lang.String getRevisionReason();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalConditionOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunV2WorkerPoolTerminalCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudRunV2WorkerPool.DataGoogleCloudRunV2WorkerPoolTerminalCondition">DataGoogleCloudRunV2WorkerPoolTerminalCondition</a>

---




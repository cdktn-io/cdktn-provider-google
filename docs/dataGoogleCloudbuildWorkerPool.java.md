# `dataGoogleCloudbuildWorkerPool` Submodule <a name="`dataGoogleCloudbuildWorkerPool` Submodule" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudbuildWorkerPool <a name="DataGoogleCloudbuildWorkerPool" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPool;

DataGoogleCloudbuildWorkerPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#location DataGoogleCloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#name DataGoogleCloudbuildWorkerPool#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#project DataGoogleCloudbuildWorkerPool#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPool;

DataGoogleCloudbuildWorkerPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPool;

DataGoogleCloudbuildWorkerPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPool;

DataGoogleCloudbuildWorkerPool.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPool;

DataGoogleCloudbuildWorkerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudbuildWorkerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudbuildWorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations">annotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig">workerConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig"></a>

```java
public DataGoogleCloudbuildWorkerPoolNetworkConfigList getNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a>

---

##### `privateServiceConnect`<sup>Required</sup> <a name="privateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect"></a>

```java
public DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList getPrivateServiceConnect();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workerConfig`<sup>Required</sup> <a name="workerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig"></a>

```java
public DataGoogleCloudbuildWorkerPoolWorkerConfigList getWorkerConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudbuildWorkerPoolConfig <a name="DataGoogleCloudbuildWorkerPoolConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolConfig;

DataGoogleCloudbuildWorkerPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#location DataGoogleCloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#name DataGoogleCloudbuildWorkerPool#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#project DataGoogleCloudbuildWorkerPool#project}

---

### DataGoogleCloudbuildWorkerPoolNetworkConfig <a name="DataGoogleCloudbuildWorkerPoolNetworkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolNetworkConfig;

DataGoogleCloudbuildWorkerPoolNetworkConfig.builder()
    .build();
```


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnect <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect;

DataGoogleCloudbuildWorkerPoolPrivateServiceConnect.builder()
    .build();
```


### DataGoogleCloudbuildWorkerPoolWorkerConfig <a name="DataGoogleCloudbuildWorkerPoolWorkerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolWorkerConfig;

DataGoogleCloudbuildWorkerPoolWorkerConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudbuildWorkerPoolNetworkConfigList <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolNetworkConfigList;

new DataGoogleCloudbuildWorkerPoolNetworkConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get"></a>

```java
public DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference;

new DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">peeredNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">peeredNetworkIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `peeredNetwork`<sup>Required</sup> <a name="peeredNetwork" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```java
public java.lang.String getPeeredNetwork();
```

- *Type:* java.lang.String

---

##### `peeredNetworkIpRange`<sup>Required</sup> <a name="peeredNetworkIpRange" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```java
public java.lang.String getPeeredNetworkIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildWorkerPoolNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a>

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList;

new DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get"></a>

```java
public DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference;

new DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">routeAllTraffic</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `routeAllTraffic`<sup>Required</sup> <a name="routeAllTraffic" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```java
public IResolvable getRouteAllTraffic();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildWorkerPoolPrivateServiceConnect getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigList <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolWorkerConfigList;

new DataGoogleCloudbuildWorkerPoolWorkerConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get"></a>

```java
public DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloudbuild_worker_pool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference;

new DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">noExternalIp</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization"></a>

```java
public IResolvable getEnableNestedVirtualization();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `noExternalIp`<sup>Required</sup> <a name="noExternalIp" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```java
public IResolvable getNoExternalIp();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildWorkerPoolWorkerConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a>

---




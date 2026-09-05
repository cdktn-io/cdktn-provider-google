# `dataGoogleDiscoveryEngineDataStores` Submodule <a name="`dataGoogleDiscoveryEngineDataStores` Submodule" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDiscoveryEngineDataStores <a name="DataGoogleDiscoveryEngineDataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores google_discovery_engine_data_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStores;

DataGoogleDiscoveryEngineDataStores.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#location DataGoogleDiscoveryEngineDataStores#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#project DataGoogleDiscoveryEngineDataStores#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStores resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStores;

DataGoogleDiscoveryEngineDataStores.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStores;

DataGoogleDiscoveryEngineDataStores.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStores;

DataGoogleDiscoveryEngineDataStores.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStores;

DataGoogleDiscoveryEngineDataStores.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleDiscoveryEngineDataStores.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleDiscoveryEngineDataStores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleDiscoveryEngineDataStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDiscoveryEngineDataStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dataStores">dataStores</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList">DataGoogleDiscoveryEngineDataStoresDataStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `dataStores`<sup>Required</sup> <a name="dataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dataStores"></a>

```java
public DataGoogleDiscoveryEngineDataStoresDataStoresList getDataStores();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList">DataGoogleDiscoveryEngineDataStoresDataStoresList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDiscoveryEngineDataStoresConfig <a name="DataGoogleDiscoveryEngineDataStoresConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStoresConfig;

DataGoogleDiscoveryEngineDataStoresConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#location DataGoogleDiscoveryEngineDataStores#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/discovery_engine_data_stores#project DataGoogleDiscoveryEngineDataStores#project}

---

### DataGoogleDiscoveryEngineDataStoresDataStores <a name="DataGoogleDiscoveryEngineDataStoresDataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStoresDataStores;

DataGoogleDiscoveryEngineDataStoresDataStores.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDiscoveryEngineDataStoresDataStoresList <a name="DataGoogleDiscoveryEngineDataStoresDataStoresList" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStoresDataStoresList;

new DataGoogleDiscoveryEngineDataStoresDataStoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get"></a>

```java
public DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference <a name="DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_discovery_engine_data_stores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference;

new DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.contentConfig">contentConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.dataStoreId">dataStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.defaultSchemaId">defaultSchemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.solutionTypes">solutionTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores">DataGoogleDiscoveryEngineDataStoresDataStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentConfig`<sup>Required</sup> <a name="contentConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.contentConfig"></a>

```java
public java.lang.String getContentConfig();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.dataStoreId"></a>

```java
public java.lang.String getDataStoreId();
```

- *Type:* java.lang.String

---

##### `defaultSchemaId`<sup>Required</sup> <a name="defaultSchemaId" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.defaultSchemaId"></a>

```java
public java.lang.String getDefaultSchemaId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `solutionTypes`<sup>Required</sup> <a name="solutionTypes" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.solutionTypes"></a>

```java
public java.util.List<java.lang.String> getSolutionTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.internalValue"></a>

```java
public DataGoogleDiscoveryEngineDataStoresDataStores getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores">DataGoogleDiscoveryEngineDataStoresDataStores</a>

---




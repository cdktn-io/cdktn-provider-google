# `dataGoogleVmwareengineDatastore` Submodule <a name="`dataGoogleVmwareengineDatastore` Submodule" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineDatastore <a name="DataGoogleVmwareengineDatastore" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastore;

DataGoogleVmwareengineDatastore.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#id DataGoogleVmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#project DataGoogleVmwareengineDatastore#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#location DataGoogleVmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#name DataGoogleVmwareengineDatastore#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#id DataGoogleVmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#project DataGoogleVmwareengineDatastore#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastore;

DataGoogleVmwareengineDatastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastore;

DataGoogleVmwareengineDatastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastore;

DataGoogleVmwareengineDatastore.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastore;

DataGoogleVmwareengineDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleVmwareengineDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleVmwareengineDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleVmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.clusters">clusters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.nfsDatastore">nfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList">DataGoogleVmwareengineDatastoreNfsDatastoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.clusters"></a>

```java
public java.util.List<java.lang.String> getClusters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `nfsDatastore`<sup>Required</sup> <a name="nfsDatastore" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.nfsDatastore"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastoreList getNfsDatastore();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList">DataGoogleVmwareengineDatastoreNfsDatastoreList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineDatastoreConfig <a name="DataGoogleVmwareengineDatastoreConfig" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreConfig;

DataGoogleVmwareengineDatastoreConfig.builder()
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
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#id DataGoogleVmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#project DataGoogleVmwareengineDatastore#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#location DataGoogleVmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#name DataGoogleVmwareengineDatastore#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#id DataGoogleVmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/vmwareengine_datastore#project DataGoogleVmwareengineDatastore#project}.

---

### DataGoogleVmwareengineDatastoreNfsDatastore <a name="DataGoogleVmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastore.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastore;

DataGoogleVmwareengineDatastoreNfsDatastore.builder()
    .build();
```


### DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService <a name="DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService;

DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.builder()
    .build();
```


### DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService;

DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList <a name="DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList;

new DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.get"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference;

new DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">filestoreInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">netappVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filestoreInstance`<sup>Required</sup> <a name="filestoreInstance" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```java
public java.lang.String getFilestoreInstance();
```

- *Type:* java.lang.String

---

##### `netappVolume`<sup>Required</sup> <a name="netappVolume" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```java
public java.lang.String getNetappVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### DataGoogleVmwareengineDatastoreNfsDatastoreList <a name="DataGoogleVmwareengineDatastoreNfsDatastoreList" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastoreList;

new DataGoogleVmwareengineDatastoreNfsDatastoreList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.get"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference <a name="DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference;

new DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">googleFileService</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList">DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">thirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList">DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastore">DataGoogleVmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `googleFileService`<sup>Required</sup> <a name="googleFileService" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList getGoogleFileService();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList">DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList</a>

---

##### `thirdPartyFileService`<sup>Required</sup> <a name="thirdPartyFileService" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList getThirdPartyFileService();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList">DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastore getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastore">DataGoogleVmwareengineDatastoreNfsDatastore</a>

---


### DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList <a name="DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList;

new DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.get"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_datastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference;

new DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">fileShare</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```java
public java.lang.String getFileShare();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---




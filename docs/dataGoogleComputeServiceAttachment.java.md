# `dataGoogleComputeServiceAttachment` Submodule <a name="`dataGoogleComputeServiceAttachment` Submodule" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeServiceAttachment <a name="DataGoogleComputeServiceAttachment" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachment;

DataGoogleComputeServiceAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#id DataGoogleComputeServiceAttachment#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#project DataGoogleComputeServiceAttachment#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the resource resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#name DataGoogleComputeServiceAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#id DataGoogleComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#project DataGoogleComputeServiceAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#region DataGoogleComputeServiceAttachment#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeServiceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachment;

DataGoogleComputeServiceAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachment;

DataGoogleComputeServiceAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachment;

DataGoogleComputeServiceAttachment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachment;

DataGoogleComputeServiceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeServiceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleComputeServiceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeServiceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.connectedEndpoints">connectedEndpoints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList">DataGoogleComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.connectionPreference">connectionPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList">DataGoogleComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.consumerRejectLists">consumerRejectLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.domainNames">domainNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.natSubnets">natSubnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.pscServiceAttachmentId">pscServiceAttachmentId</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.reconcileConnections">reconcileConnections</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.showNatIps">showNatIps</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.targetService">targetService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `connectedEndpoints`<sup>Required</sup> <a name="connectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.connectedEndpoints"></a>

```java
public DataGoogleComputeServiceAttachmentConnectedEndpointsList getConnectedEndpoints();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList">DataGoogleComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.connectionPreference"></a>

```java
public java.lang.String getConnectionPreference();
```

- *Type:* java.lang.String

---

##### `consumerAcceptLists`<sup>Required</sup> <a name="consumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.consumerAcceptLists"></a>

```java
public DataGoogleComputeServiceAttachmentConsumerAcceptListsList getConsumerAcceptLists();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList">DataGoogleComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `consumerRejectLists`<sup>Required</sup> <a name="consumerRejectLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.consumerRejectLists"></a>

```java
public java.util.List<java.lang.String> getConsumerRejectLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.domainNames"></a>

```java
public java.util.List<java.lang.String> getDomainNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.enableProxyProtocol"></a>

```java
public IResolvable getEnableProxyProtocol();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.natSubnets"></a>

```java
public java.util.List<java.lang.String> getNatSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `propagatedConnectionLimit`<sup>Required</sup> <a name="propagatedConnectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.propagatedConnectionLimit"></a>

```java
public java.lang.Number getPropagatedConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `pscServiceAttachmentId`<sup>Required</sup> <a name="pscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.pscServiceAttachmentId"></a>

```java
public DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList getPscServiceAttachmentId();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList</a>

---

##### `reconcileConnections`<sup>Required</sup> <a name="reconcileConnections" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.reconcileConnections"></a>

```java
public IResolvable getReconcileConnections();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Required</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.sendPropagatedConnectionLimitIfZero"></a>

```java
public IResolvable getSendPropagatedConnectionLimitIfZero();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `showNatIps`<sup>Required</sup> <a name="showNatIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.showNatIps"></a>

```java
public IResolvable getShowNatIps();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.targetService"></a>

```java
public java.lang.String getTargetService();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeServiceAttachmentConfig <a name="DataGoogleComputeServiceAttachmentConfig" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentConfig;

DataGoogleComputeServiceAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#id DataGoogleComputeServiceAttachment#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#project DataGoogleComputeServiceAttachment#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the resource resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#name DataGoogleComputeServiceAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#id DataGoogleComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#project DataGoogleComputeServiceAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_service_attachment#region DataGoogleComputeServiceAttachment#region}

---

### DataGoogleComputeServiceAttachmentConnectedEndpoints <a name="DataGoogleComputeServiceAttachmentConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentConnectedEndpoints;

DataGoogleComputeServiceAttachmentConnectedEndpoints.builder()
    .build();
```


### DataGoogleComputeServiceAttachmentConsumerAcceptLists <a name="DataGoogleComputeServiceAttachmentConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists;

DataGoogleComputeServiceAttachmentConsumerAcceptLists.builder()
    .build();
```


### DataGoogleComputeServiceAttachmentPscServiceAttachmentId <a name="DataGoogleComputeServiceAttachmentPscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId;

DataGoogleComputeServiceAttachmentPscServiceAttachmentId.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeServiceAttachmentConnectedEndpointsList <a name="DataGoogleComputeServiceAttachmentConnectedEndpointsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList;

new DataGoogleComputeServiceAttachmentConnectedEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.get"></a>

```java
public DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference <a name="DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference;

new DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagatedConnectionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints">DataGoogleComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.natIps"></a>

```java
public java.util.List<java.lang.String> getNatIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `propagatedConnectionCount`<sup>Required</sup> <a name="propagatedConnectionCount" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```java
public java.lang.Number getPropagatedConnectionCount();
```

- *Type:* java.lang.Number

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeServiceAttachmentConnectedEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConnectedEndpoints">DataGoogleComputeServiceAttachmentConnectedEndpoints</a>

---


### DataGoogleComputeServiceAttachmentConsumerAcceptListsList <a name="DataGoogleComputeServiceAttachmentConsumerAcceptListsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList;

new DataGoogleComputeServiceAttachmentConsumerAcceptListsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```java
public DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference;

new DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">networkUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">projectIdOrNum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists">DataGoogleComputeServiceAttachmentConsumerAcceptLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```java
public java.lang.String getNetworkUrl();
```

- *Type:* java.lang.String

---

##### `projectIdOrNum`<sup>Required</sup> <a name="projectIdOrNum" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```java
public java.lang.String getProjectIdOrNum();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeServiceAttachmentConsumerAcceptLists getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentConsumerAcceptLists">DataGoogleComputeServiceAttachmentConsumerAcceptLists</a>

---


### DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList <a name="DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList;

new DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.get"></a>

```java
public DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference <a name="DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_compute_service_attachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference;

new DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.high">high</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.low">low</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId">DataGoogleComputeServiceAttachmentPscServiceAttachmentId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.high"></a>

```java
public java.lang.String getHigh();
```

- *Type:* java.lang.String

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.low"></a>

```java
public java.lang.String getLow();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeServiceAttachmentPscServiceAttachmentId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachment.DataGoogleComputeServiceAttachmentPscServiceAttachmentId">DataGoogleComputeServiceAttachmentPscServiceAttachmentId</a>

---




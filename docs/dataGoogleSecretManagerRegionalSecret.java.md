# `dataGoogleSecretManagerRegionalSecret` Submodule <a name="`dataGoogleSecretManagerRegionalSecret` Submodule" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecret <a name="DataGoogleSecretManagerRegionalSecret" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret google_secret_manager_regional_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecret;

DataGoogleSecretManagerRegionalSecret.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#location DataGoogleSecretManagerRegionalSecret#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#secret_id DataGoogleSecretManagerRegionalSecret#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleSecretManagerRegionalSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecret;

DataGoogleSecretManagerRegionalSecret.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecret;

DataGoogleSecretManagerRegionalSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecret;

DataGoogleSecretManagerRegionalSecret.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecret;

DataGoogleSecretManagerRegionalSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleSecretManagerRegionalSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleSecretManagerRegionalSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleSecretManagerRegionalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.annotations">annotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.deletionProtection">deletionProtection</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.labels">labels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList">DataGoogleSecretManagerRegionalSecretRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.topics">topics</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList">DataGoogleSecretManagerRegionalSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionAliases">versionAliases</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionDestroyTtl">versionDestroyTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.customerManagedEncryption"></a>

```java
public DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList getCustomerManagedEncryption();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.rotation"></a>

```java
public DataGoogleSecretManagerRegionalSecretRotationList getRotation();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList">DataGoogleSecretManagerRegionalSecretRotationList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.topics"></a>

```java
public DataGoogleSecretManagerRegionalSecretTopicsList getTopics();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList">DataGoogleSecretManagerRegionalSecretTopicsList</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionAliases"></a>

```java
public StringMap getVersionAliases();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `versionDestroyTtl`<sup>Required</sup> <a name="versionDestroyTtl" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionDestroyTtl"></a>

```java
public java.lang.String getVersionDestroyTtl();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretConfig <a name="DataGoogleSecretManagerRegionalSecretConfig" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretConfig;

DataGoogleSecretManagerRegionalSecretConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#location DataGoogleSecretManagerRegionalSecret#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#secret_id DataGoogleSecretManagerRegionalSecret#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}.

---

### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption;

DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption.builder()
    .build();
```


### DataGoogleSecretManagerRegionalSecretRotation <a name="DataGoogleSecretManagerRegionalSecretRotation" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretRotation;

DataGoogleSecretManagerRegionalSecretRotation.builder()
    .build();
```


### DataGoogleSecretManagerRegionalSecretTopics <a name="DataGoogleSecretManagerRegionalSecretTopics" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretTopics;

DataGoogleSecretManagerRegionalSecretTopics.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList;

new DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get"></a>

```java
public DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference;

new DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```java
public DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerRegionalSecretRotationList <a name="DataGoogleSecretManagerRegionalSecretRotationList" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretRotationList;

new DataGoogleSecretManagerRegionalSecretRotationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get"></a>

```java
public DataGoogleSecretManagerRegionalSecretRotationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSecretManagerRegionalSecretRotationOutputReference <a name="DataGoogleSecretManagerRegionalSecretRotationOutputReference" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretRotationOutputReference;

new DataGoogleSecretManagerRegionalSecretRotationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime">nextRotationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation">DataGoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime"></a>

```java
public java.lang.String getNextRotationTime();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue"></a>

```java
public DataGoogleSecretManagerRegionalSecretRotation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation">DataGoogleSecretManagerRegionalSecretRotation</a>

---


### DataGoogleSecretManagerRegionalSecretTopicsList <a name="DataGoogleSecretManagerRegionalSecretTopicsList" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretTopicsList;

new DataGoogleSecretManagerRegionalSecretTopicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get"></a>

```java
public DataGoogleSecretManagerRegionalSecretTopicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSecretManagerRegionalSecretTopicsOutputReference <a name="DataGoogleSecretManagerRegionalSecretTopicsOutputReference" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_secret_manager_regional_secret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference;

new DataGoogleSecretManagerRegionalSecretTopicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics">DataGoogleSecretManagerRegionalSecretTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue"></a>

```java
public DataGoogleSecretManagerRegionalSecretTopics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics">DataGoogleSecretManagerRegionalSecretTopics</a>

---




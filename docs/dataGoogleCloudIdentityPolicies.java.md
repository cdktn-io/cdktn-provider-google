# `dataGoogleCloudIdentityPolicies` Submodule <a name="`dataGoogleCloudIdentityPolicies` Submodule" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityPolicies <a name="DataGoogleCloudIdentityPolicies" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/cloud_identity_policies google_cloud_identity_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPolicies;

DataGoogleCloudIdentityPolicies.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Filter expression for listing policies, as documented in the Cloud Identity Policy API policies.list method. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/cloud_identity_policies#id DataGoogleCloudIdentityPolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Filter expression for listing policies, as documented in the Cloud Identity Policy API policies.list method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/cloud_identity_policies#filter DataGoogleCloudIdentityPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/cloud_identity_policies#id DataGoogleCloudIdentityPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudIdentityPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPolicies;

DataGoogleCloudIdentityPolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPolicies;

DataGoogleCloudIdentityPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPolicies;

DataGoogleCloudIdentityPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPolicies;

DataGoogleCloudIdentityPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudIdentityPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleCloudIdentityPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudIdentityPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudIdentityPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/cloud_identity_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList">DataGoogleCloudIdentityPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.policies"></a>

```java
public DataGoogleCloudIdentityPoliciesPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList">DataGoogleCloudIdentityPoliciesPoliciesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityPoliciesConfig <a name="DataGoogleCloudIdentityPoliciesConfig" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPoliciesConfig;

DataGoogleCloudIdentityPoliciesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Filter expression for listing policies, as documented in the Cloud Identity Policy API policies.list method. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/cloud_identity_policies#id DataGoogleCloudIdentityPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Filter expression for listing policies, as documented in the Cloud Identity Policy API policies.list method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/cloud_identity_policies#filter DataGoogleCloudIdentityPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/cloud_identity_policies#id DataGoogleCloudIdentityPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityPoliciesPolicies <a name="DataGoogleCloudIdentityPoliciesPolicies" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPoliciesPolicies;

DataGoogleCloudIdentityPoliciesPolicies.builder()
    .build();
```


### DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery <a name="DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery;

DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityPoliciesPoliciesList <a name="DataGoogleCloudIdentityPoliciesPoliciesList" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPoliciesPoliciesList;

new DataGoogleCloudIdentityPoliciesPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.get"></a>

```java
public DataGoogleCloudIdentityPoliciesPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudIdentityPoliciesPoliciesOutputReference <a name="DataGoogleCloudIdentityPoliciesPoliciesOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference;

new DataGoogleCloudIdentityPoliciesPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.customer">customer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList">DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.setting">setting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies">DataGoogleCloudIdentityPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.policyQuery"></a>

```java
public DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList getPolicyQuery();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList">DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.setting"></a>

```java
public java.lang.String getSetting();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudIdentityPoliciesPolicies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPolicies">DataGoogleCloudIdentityPoliciesPolicies</a>

---


### DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList <a name="DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList;

new DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.get"></a>

```java
public DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference <a name="DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_cloud_identity_policies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference;

new DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.orgUnit">orgUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery">DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.orgUnit"></a>

```java
public java.lang.String getOrgUnit();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.sortOrder"></a>

```java
public java.lang.Number getSortOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQueryOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicies.DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery">DataGoogleCloudIdentityPoliciesPoliciesPolicyQuery</a>

---




# `dataGoogleVmwareengineUpgrades` Submodule <a name="`dataGoogleVmwareengineUpgrades` Submodule" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineUpgrades <a name="DataGoogleVmwareengineUpgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades google_vmwareengine_upgrades}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgrades;

DataGoogleVmwareengineUpgrades.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The resource name of the private cloud for which upgrades will be listed. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The resource name of the private cloud for which upgrades will be listed.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#parent DataGoogleVmwareengineUpgrades#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#name DataGoogleVmwareengineUpgrades#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineUpgrades resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgrades;

DataGoogleVmwareengineUpgrades.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgrades;

DataGoogleVmwareengineUpgrades.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgrades;

DataGoogleVmwareengineUpgrades.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgrades;

DataGoogleVmwareengineUpgrades.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleVmwareengineUpgrades.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleVmwareengineUpgrades resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleVmwareengineUpgrades to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleVmwareengineUpgrades that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineUpgrades to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.upgrades">upgrades</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList">DataGoogleVmwareengineUpgradesUpgradesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `upgrades`<sup>Required</sup> <a name="upgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.upgrades"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesList getUpgrades();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList">DataGoogleVmwareengineUpgradesUpgradesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineUpgradesConfig <a name="DataGoogleVmwareengineUpgradesConfig" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesConfig;

DataGoogleVmwareengineUpgradesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The resource name of the private cloud for which upgrades will be listed. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The resource name of the private cloud for which upgrades will be listed.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#parent DataGoogleVmwareengineUpgrades#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/vmwareengine_upgrades#name DataGoogleVmwareengineUpgrades#name}

---

### DataGoogleVmwareengineUpgradesUpgrades <a name="DataGoogleVmwareengineUpgradesUpgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgrades;

DataGoogleVmwareengineUpgradesUpgrades.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades;

DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesSchedule <a name="DataGoogleVmwareengineUpgradesUpgradesSchedule" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule;

DataGoogleVmwareengineUpgradesUpgradesSchedule.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints;

DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals;

DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime;

DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime;

DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange;

DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow;

DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows;

DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows.builder()
    .build();
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime;

DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList;

new DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.componentType">componentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades">DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades">DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades</a>

---


### DataGoogleVmwareengineUpgradesUpgradesList <a name="DataGoogleVmwareengineUpgradesUpgradesList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesList;

new DataGoogleVmwareengineUpgradesUpgradesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.componentUpgrades">componentUpgrades</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList">DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.estimatedDuration">estimatedDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList">DataGoogleVmwareengineUpgradesUpgradesScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.startVersion">startVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades">DataGoogleVmwareengineUpgradesUpgrades</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentUpgrades`<sup>Required</sup> <a name="componentUpgrades" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.componentUpgrades"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList getComponentUpgrades();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList">DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `estimatedDuration`<sup>Required</sup> <a name="estimatedDuration" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.estimatedDuration"></a>

```java
public java.lang.String getEstimatedDuration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.schedule"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleList getSchedule();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList">DataGoogleVmwareengineUpgradesUpgradesScheduleList</a>

---

##### `startVersion`<sup>Required</sup> <a name="startVersion" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.startVersion"></a>

```java
public java.lang.String getStartVersion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.targetVersion"></a>

```java
public java.lang.String getTargetVersion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgrades getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades">DataGoogleVmwareengineUpgradesUpgrades</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endDay">endDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startDay">startDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDay`<sup>Required</sup> <a name="endDay" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endDay"></a>

```java
public java.lang.String getEndDay();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endTime"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList getEndTime();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList</a>

---

##### `startDay`<sup>Required</sup> <a name="startDay" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startDay"></a>

```java
public java.lang.String getStartDay();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startTime"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.disallowedIntervals">disallowedIntervals</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursDay">minHoursDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursWeek">minHoursWeek</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.rescheduleDateRange">rescheduleDateRange</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disallowedIntervals`<sup>Required</sup> <a name="disallowedIntervals" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.disallowedIntervals"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList getDisallowedIntervals();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList</a>

---

##### `minHoursDay`<sup>Required</sup> <a name="minHoursDay" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursDay"></a>

```java
public java.lang.Number getMinHoursDay();
```

- *Type:* java.lang.Number

---

##### `minHoursWeek`<sup>Required</sup> <a name="minHoursWeek" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursWeek"></a>

```java
public java.lang.Number getMinHoursWeek();
```

- *Type:* java.lang.Number

---

##### `rescheduleDateRange`<sup>Required</sup> <a name="rescheduleDateRange" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.rescheduleDateRange"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList getRescheduleDateRange();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.editWindow">editWindow</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.weeklyWindows">weeklyWindows</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule">DataGoogleVmwareengineUpgradesUpgradesSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.constraints"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList getConstraints();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList</a>

---

##### `editWindow`<sup>Required</sup> <a name="editWindow" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.editWindow"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList getEditWindow();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `weeklyWindows`<sup>Required</sup> <a name="weeklyWindows" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.weeklyWindows"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList getWeeklyWindows();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule">DataGoogleVmwareengineUpgradesUpgradesSchedule</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.startTime"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_vmwareengine_upgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime</a>

---




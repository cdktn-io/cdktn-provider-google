# `dataGoogleVmwareengineDatastore` Submodule <a name="`dataGoogleVmwareengineDatastore` Submodule" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineDatastore <a name="DataGoogleVmwareengineDatastore" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastore(Construct Scope, string Id, DataGoogleVmwareengineDatastoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig">DataGoogleVmwareengineDatastoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig">DataGoogleVmwareengineDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineDatastore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineDatastore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineDatastore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineDatastore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineDatastore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.clusters">Clusters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.nfsDatastore">NfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList">DataGoogleVmwareengineDatastoreNfsDatastoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.clusters"></a>

```csharp
public string[] Clusters { get; }
```

- *Type:* string[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NfsDatastore`<sup>Required</sup> <a name="NfsDatastore" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.nfsDatastore"></a>

```csharp
public DataGoogleVmwareengineDatastoreNfsDatastoreList NfsDatastore { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList">DataGoogleVmwareengineDatastoreNfsDatastoreList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineDatastoreConfig <a name="DataGoogleVmwareengineDatastoreConfig" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.name">Name</a></code> | <code>string</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/vmwareengine_datastore#id DataGoogleVmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/vmwareengine_datastore#project DataGoogleVmwareengineDatastore#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/vmwareengine_datastore#location DataGoogleVmwareengineDatastore#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/vmwareengine_datastore#name DataGoogleVmwareengineDatastore#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/vmwareengine_datastore#id DataGoogleVmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/vmwareengine_datastore#project DataGoogleVmwareengineDatastore#project}.

---

### DataGoogleVmwareengineDatastoreNfsDatastore <a name="DataGoogleVmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastore {

};
```


### DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService <a name="DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService {

};
```


### DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList <a name="DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.get"></a>

```csharp
private DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">FilestoreInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">NetappVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilestoreInstance`<sup>Required</sup> <a name="FilestoreInstance" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```csharp
public string FilestoreInstance { get; }
```

- *Type:* string

---

##### `NetappVolume`<sup>Required</sup> <a name="NetappVolume" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```csharp
public string NetappVolume { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### DataGoogleVmwareengineDatastoreNfsDatastoreList <a name="DataGoogleVmwareengineDatastoreNfsDatastoreList" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastoreList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.get"></a>

```csharp
private DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference <a name="DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">GoogleFileService</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList">DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">ThirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList">DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastore">DataGoogleVmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleFileService`<sup>Required</sup> <a name="GoogleFileService" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```csharp
public DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList GoogleFileService { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList">DataGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceList</a>

---

##### `ThirdPartyFileService`<sup>Required</sup> <a name="ThirdPartyFileService" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```csharp
public DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList ThirdPartyFileService { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList">DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineDatastoreNfsDatastore InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastore">DataGoogleVmwareengineDatastoreNfsDatastore</a>

---


### DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList <a name="DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.get"></a>

```csharp
private DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">FileShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">Servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileShare`<sup>Required</sup> <a name="FileShare" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```csharp
public string FileShare { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```csharp
public string[] Servers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineDatastore.DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">DataGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---




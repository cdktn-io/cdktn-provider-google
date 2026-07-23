# `dataGoogleBackupDrDataSources` Submodule <a name="`dataGoogleBackupDrDataSources` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSources <a name="DataGoogleBackupDrDataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources google_backup_dr_data_sources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSources(Construct Scope, string Id, DataGoogleBackupDrDataSourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig">DataGoogleBackupDrDataSourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig">DataGoogleBackupDrDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetOrderBy"></a>

```csharp
private void ResetOrderBy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrDataSources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrDataSources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrDataSources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrDataSources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleBackupDrDataSources resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBackupDrDataSources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBackupDrDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId">BackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.dataSources"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesList DataSources { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList">DataGoogleBackupDrDataSourcesDataSourcesList</a>

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultIdInput"></a>

```csharp
public string BackupVaultIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.backupVaultId"></a>

```csharp
public string BackupVaultId { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourcesConfig <a name="DataGoogleBackupDrDataSourcesConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupVaultId,
    string Location,
    string Filter = null,
    string Id = null,
    string OrderBy = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId">BackupVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter">Filter</a></code> | <code>string</code> | The filter to apply to list results. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy">OrderBy</a></code> | <code>string</code> | The order to sort results by. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.backupVaultId"></a>

```csharp
public string BackupVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#backup_vault_id DataGoogleBackupDrDataSources#backup_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#location DataGoogleBackupDrDataSources#location}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply to list results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#filter DataGoogleBackupDrDataSources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#id DataGoogleBackupDrDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

The order to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#order_by DataGoogleBackupDrDataSources#order_by}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/backup_dr_data_sources#project DataGoogleBackupDrDataSources#project}.

---

### DataGoogleBackupDrDataSourcesDataSources <a name="DataGoogleBackupDrDataSourcesDataSources" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSources {

};
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo {

};
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig {

};
```


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig {

};
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication {

};
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource {

};
```


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get"></a>

```csharp
private DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId">BackupApplianceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName">BackupApplianceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId">SlaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName">SlpName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName">SltName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `BackupApplianceId`<sup>Required</sup> <a name="BackupApplianceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId"></a>

```csharp
public string BackupApplianceId { get; }
```

- *Type:* string

---

##### `BackupApplianceName`<sup>Required</sup> <a name="BackupApplianceName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName"></a>

```csharp
public string BackupApplianceName { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `SlaId`<sup>Required</sup> <a name="SlaId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId"></a>

```csharp
public string SlaId { get; }
```

- *Type:* string

---

##### `SlpName`<sup>Required</sup> <a name="SlpName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName"></a>

```csharp
public string SlpName { get; }
```

- *Type:* string

---

##### `SltName`<sup>Required</sup> <a name="SltName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName"></a>

```csharp
public string SltName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get"></a>

```csharp
private DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan">BackupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation">BackupPlanAssociation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription">BackupPlanDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules">BackupPlanRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan"></a>

```csharp
public string BackupPlan { get; }
```

- *Type:* string

---

##### `BackupPlanAssociation`<sup>Required</sup> <a name="BackupPlanAssociation" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation"></a>

```csharp
public string BackupPlanAssociation { get; }
```

- *Type:* string

---

##### `BackupPlanDescription`<sup>Required</sup> <a name="BackupPlanDescription" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription"></a>

```csharp
public string BackupPlanDescription { get; }
```

- *Type:* string

---

##### `BackupPlanRules`<sup>Required</sup> <a name="BackupPlanRules" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules"></a>

```csharp
public string[] BackupPlanRules { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfig</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get"></a>

```csharp
private DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig">BackupApplianceBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig">GcpBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupApplianceBackupConfig`<sup>Required</sup> <a name="BackupApplianceBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.backupApplianceBackupConfig"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList BackupApplianceBackupConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoBackupApplianceBackupConfigList</a>

---

##### `GcpBackupConfig`<sup>Required</sup> <a name="GcpBackupConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.gcpBackupConfig"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList GcpBackupConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoGcpBackupConfigList</a>

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupError"></a>

```csharp
public StringMap LastBackupError { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastBackupState"></a>

```csharp
public string LastBackupState { get; }
```

- *Type:* string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```csharp
public string LastSuccessfulBackupConsistencyTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfo</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get"></a>

```csharp
private DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId">ApplianceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance">BackupAppliance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplianceId`<sup>Required</sup> <a name="ApplianceId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applianceId"></a>

```csharp
public string ApplianceId { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `BackupAppliance`<sup>Required</sup> <a name="BackupAppliance" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance"></a>

```csharp
public string BackupAppliance { get; }
```

- *Type:* string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplication</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get"></a>

```csharp
private DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount">TotalDiskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb">TotalDiskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TotalDiskCount`<sup>Required</sup> <a name="TotalDiskCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount"></a>

```csharp
public string TotalDiskCount { get; }
```

- *Type:* string

---

##### `TotalDiskSizeGb`<sup>Required</sup> <a name="TotalDiskSizeGb" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb"></a>

```csharp
public string TotalDiskSizeGb { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourceProperties</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get"></a>

```csharp
private DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties">ComputeInstanceDataSourceProperties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename">GcpResourcename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeInstanceDataSourceProperties`<sup>Required</sup> <a name="ComputeInstanceDataSourceProperties" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList ComputeInstanceDataSourceProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a>

---

##### `GcpResourcename`<sup>Required</sup> <a name="GcpResourcename" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.gcpResourcename"></a>

```csharp
public string GcpResourcename { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResource</a>

---


### DataGoogleBackupDrDataSourcesDataSourcesList <a name="DataGoogleBackupDrDataSourcesDataSourcesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get"></a>

```csharp
private DataGoogleBackupDrDataSourcesDataSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrDataSourcesDataSourcesOutputReference <a name="DataGoogleBackupDrDataSourcesDataSourcesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourcesDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupBlockedByVaultAccessRestriction">BackupBlockedByVaultAccessRestriction</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo">BackupConfigInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount">BackupCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState">ConfigState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication">DataSourceBackupApplianceApplication</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource">DataSourceGcpResource</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes">TotalStoredBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupBlockedByVaultAccessRestriction`<sup>Required</sup> <a name="BackupBlockedByVaultAccessRestriction" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupBlockedByVaultAccessRestriction"></a>

```csharp
public IResolvable BackupBlockedByVaultAccessRestriction { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BackupConfigInfo`<sup>Required</sup> <a name="BackupConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupConfigInfo"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList BackupConfigInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList">DataGoogleBackupDrDataSourcesDataSourcesBackupConfigInfoList</a>

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.backupCount"></a>

```csharp
public string BackupCount { get; }
```

- *Type:* string

---

##### `ConfigState`<sup>Required</sup> <a name="ConfigState" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.configState"></a>

```csharp
public string ConfigState { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataSourceBackupApplianceApplication`<sup>Required</sup> <a name="DataSourceBackupApplianceApplication" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceBackupApplianceApplication"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList DataSourceBackupApplianceApplication { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceBackupApplianceApplicationList</a>

---

##### `DataSourceGcpResource`<sup>Required</sup> <a name="DataSourceGcpResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.dataSourceGcpResource"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList DataSourceGcpResource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList">DataGoogleBackupDrDataSourcesDataSourcesDataSourceGcpResourceList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TotalStoredBytes`<sup>Required</sup> <a name="TotalStoredBytes" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.totalStoredBytes"></a>

```csharp
public string TotalStoredBytes { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSourcesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrDataSourcesDataSources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSources.DataGoogleBackupDrDataSourcesDataSources">DataGoogleBackupDrDataSourcesDataSources</a>

---




# `dataGoogleBackupDrDataSourceReferences` Submodule <a name="`dataGoogleBackupDrDataSourceReferences` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSourceReferences <a name="DataGoogleBackupDrDataSourceReferences" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references google_backup_dr_data_source_references}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourceReferences(Construct Scope, string Id, DataGoogleBackupDrDataSourceReferencesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig">DataGoogleBackupDrDataSourceReferencesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig">DataGoogleBackupDrDataSourceReferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrDataSourceReferences resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrDataSourceReferences.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrDataSourceReferences.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrDataSourceReferences.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrDataSourceReferences.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleBackupDrDataSourceReferences resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBackupDrDataSourceReferences to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBackupDrDataSourceReferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSourceReferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.dataSourceReferences">DataSourceReferences</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList">DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DataSourceReferences`<sup>Required</sup> <a name="DataSourceReferences" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.dataSourceReferences"></a>

```csharp
public DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList DataSourceReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList">DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferences.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourceReferencesConfig <a name="DataGoogleBackupDrDataSourceReferencesConfig" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourceReferencesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Id = null,
    string Project = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.location">Location</a></code> | <code>string</code> | The location to list the data source references from. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#id DataGoogleBackupDrDataSourceReferences#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location to list the data source references from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#location DataGoogleBackupDrDataSourceReferences#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#id DataGoogleBackupDrDataSourceReferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#project DataGoogleBackupDrDataSourceReferences#project}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/backup_dr_data_source_references#resource_type DataGoogleBackupDrDataSourceReferences#resource_type}

---

### DataGoogleBackupDrDataSourceReferencesDataSourceReferences <a name="DataGoogleBackupDrDataSourceReferencesDataSourceReferences" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourceReferencesDataSourceReferences {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList <a name="DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.get"></a>

```csharp
private DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference <a name="DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.backupConfigState">BackupConfigState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.backupCount">BackupCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.gcpResourceName">GcpResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.lastSuccessfulBackupTime">LastSuccessfulBackupTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences">DataGoogleBackupDrDataSourceReferencesDataSourceReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupConfigState`<sup>Required</sup> <a name="BackupConfigState" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.backupConfigState"></a>

```csharp
public string BackupConfigState { get; }
```

- *Type:* string

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.backupCount"></a>

```csharp
public double BackupCount { get; }
```

- *Type:* double

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `GcpResourceName`<sup>Required</sup> <a name="GcpResourceName" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.gcpResourceName"></a>

```csharp
public string GcpResourceName { get; }
```

- *Type:* string

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.lastBackupState"></a>

```csharp
public string LastBackupState { get; }
```

- *Type:* string

---

##### `LastSuccessfulBackupTime`<sup>Required</sup> <a name="LastSuccessfulBackupTime" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.lastSuccessfulBackupTime"></a>

```csharp
public string LastSuccessfulBackupTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferencesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrDataSourceReferencesDataSourceReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrDataSourceReferences.DataGoogleBackupDrDataSourceReferencesDataSourceReferences">DataGoogleBackupDrDataSourceReferencesDataSourceReferences</a>

---




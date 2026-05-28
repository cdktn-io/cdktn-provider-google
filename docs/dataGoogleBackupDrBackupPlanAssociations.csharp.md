# `dataGoogleBackupDrBackupPlanAssociations` Submodule <a name="`dataGoogleBackupDrBackupPlanAssociations` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlanAssociations <a name="DataGoogleBackupDrBackupPlanAssociations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations google_backup_dr_backup_plan_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociations(Construct Scope, string Id, DataGoogleBackupDrBackupPlanAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig">DataGoogleBackupDrBackupPlanAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig">DataGoogleBackupDrBackupPlanAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrBackupPlanAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrBackupPlanAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrBackupPlanAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleBackupDrBackupPlanAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBackupDrBackupPlanAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBackupDrBackupPlanAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlanAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.associations">Associations</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList">DataGoogleBackupDrBackupPlanAssociationsAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.associations"></a>

```csharp
public DataGoogleBackupDrBackupPlanAssociationsAssociationsList Associations { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList">DataGoogleBackupDrBackupPlanAssociationsAssociationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanAssociationsAssociations <a name="DataGoogleBackupDrBackupPlanAssociationsAssociations" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociations {

};
```


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo {

};
```


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError {

};
```


### DataGoogleBackupDrBackupPlanAssociationsConfig <a name="DataGoogleBackupDrBackupPlanAssociationsConfig" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsConfig {
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
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.location">Location</a></code> | <code>string</code> | The location to list the backup plan associations from. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location to list the backup plan associations from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#location DataGoogleBackupDrBackupPlanAssociations#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#project DataGoogleBackupDrBackupPlanAssociations#project}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#resource_type DataGoogleBackupDrBackupPlanAssociations#resource_type}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanAssociationsAssociationsList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get"></a>

```csharp
private DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.backupPlan">BackupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.rulesConfigInfo">RulesConfigInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations">DataGoogleBackupDrBackupPlanAssociationsAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.backupPlan"></a>

```csharp
public string BackupPlan { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `RulesConfigInfo`<sup>Required</sup> <a name="RulesConfigInfo" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.rulesConfigInfo"></a>

```csharp
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList RulesConfigInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrBackupPlanAssociationsAssociations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociations">DataGoogleBackupDrBackupPlanAssociationsAssociations</a>

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get"></a>

```csharp
private DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError</a>

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get"></a>

```csharp
private DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupError"></a>

```csharp
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList LastBackupError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList</a>

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastBackupState"></a>

```csharp
public string LastBackupState { get; }
```

- *Type:* string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```csharp
public string LastSuccessfulBackupConsistencyTime { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlanAssociations.DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo</a>

---




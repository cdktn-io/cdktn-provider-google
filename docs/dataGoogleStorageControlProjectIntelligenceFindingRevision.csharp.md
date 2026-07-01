# `dataGoogleStorageControlProjectIntelligenceFindingRevision` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindingRevision` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevision <a name="DataGoogleStorageControlProjectIntelligenceFindingRevision" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision google_storage_control_project_intelligence_finding_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevision(Construct Scope, string Id, DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig">DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig">DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageControlProjectIntelligenceFindingRevision.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageControlProjectIntelligenceFindingRevision.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageControlProjectIntelligenceFindingRevision.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageControlProjectIntelligenceFindingRevision.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevision resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingRevision to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageControlProjectIntelligenceFindingRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingIdInput">FindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionIdInput">RevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingId">FindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.snapshot"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList Snapshot { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList</a>

---

##### `FindingIdInput`<sup>Optional</sup> <a name="FindingIdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingIdInput"></a>

```csharp
public string FindingIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RevisionIdInput`<sup>Optional</sup> <a name="RevisionIdInput" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionIdInput"></a>

```csharp
public string RevisionIdInput { get; }
```

- *Type:* string

---

##### `FindingId`<sup>Required</sup> <a name="FindingId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.findingId"></a>

```csharp
public string FindingId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevision.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FindingId,
    string RevisionId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.findingId">FindingId</a></code> | <code>string</code> | The ID of the intelligence finding. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.revisionId">RevisionId</a></code> | <code>string</code> | The ID of the finding revision. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.location">Location</a></code> | <code>string</code> | The location of the intelligence finding. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FindingId`<sup>Required</sup> <a name="FindingId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.findingId"></a>

```csharp
public string FindingId { get; set; }
```

- *Type:* string

The ID of the intelligence finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevision#finding_id}

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.revisionId"></a>

```csharp
public string RevisionId { get; set; }
```

- *Type:* string

The ID of the finding revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#revision_id DataGoogleStorageControlProjectIntelligenceFindingRevision#revision_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the intelligence finding. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#location DataGoogleStorageControlProjectIntelligenceFindingRevision#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/storage_control_project_intelligence_finding_revision#project DataGoogleStorageControlProjectIntelligenceFindingRevision#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList TopBuckets { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList TopPrefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList Contribution { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```csharp
public string TotalStorageGrowthBytes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList TopBuckets { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList</a>

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList TopPrefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList Contribution { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```csharp
public string TotalStorageGrowthBytes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.associatedResources">AssociatedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike">ColdlineAndArchivalStorageOperationsSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.crossRegionEgressSpike">CrossRegionEgressSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.observationPeriod">ObservationPeriod</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.storageGrowthAboveTrend">StorageGrowthAboveTrend</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.targetResource">TargetResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.throttledRequestsSpike">ThrottledRequestsSpike</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociatedResources`<sup>Required</sup> <a name="AssociatedResources" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.associatedResources"></a>

```csharp
public string[] AssociatedResources { get; }
```

- *Type:* string[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `ColdlineAndArchivalStorageOperationsSpike`<sup>Required</sup> <a name="ColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.coldlineAndArchivalStorageOperationsSpike"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList ColdlineAndArchivalStorageOperationsSpike { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CrossRegionEgressSpike`<sup>Required</sup> <a name="CrossRegionEgressSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.crossRegionEgressSpike"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList CrossRegionEgressSpike { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObservationPeriod`<sup>Required</sup> <a name="ObservationPeriod" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.observationPeriod"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList ObservationPeriod { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `StorageGrowthAboveTrend`<sup>Required</sup> <a name="StorageGrowthAboveTrend" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.storageGrowthAboveTrend"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList StorageGrowthAboveTrend { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList</a>

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.targetResource"></a>

```csharp
public string TargetResource { get; }
```

- *Type:* string

---

##### `ThrottledRequestsSpike`<sup>Required</sup> <a name="ThrottledRequestsSpike" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.throttledRequestsSpike"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList ThrottledRequestsSpike { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList TopBuckets { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList</a>

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```csharp
public string TotalStorageGrowthBytes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList TopPrefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList Contribution { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```csharp
public string TotalStorageGrowthBytes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets">TopBuckets</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TopBuckets`<sup>Required</sup> <a name="TopBuckets" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList TopBuckets { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">TopPrefixes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopPrefixes`<sup>Required</sup> <a name="TopPrefixes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList TopPrefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">Contribution</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">PercentageIncrease</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">ThrottledRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">TotalEgressBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">TotalOperationsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">TotalStorageGrowthBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Contribution`<sup>Required</sup> <a name="Contribution" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList Contribution { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `PercentageIncrease`<sup>Required</sup> <a name="PercentageIncrease" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```csharp
public double PercentageIncrease { get; }
```

- *Type:* double

---

##### `ThrottledRequests`<sup>Required</sup> <a name="ThrottledRequests" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```csharp
public string ThrottledRequests { get; }
```

- *Type:* string

---

##### `TotalEgressBytes`<sup>Required</sup> <a name="TotalEgressBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```csharp
public string TotalEgressBytes { get; }
```

- *Type:* string

---

##### `TotalOperationsCount`<sup>Required</sup> <a name="TotalOperationsCount" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```csharp
public string TotalOperationsCount { get; }
```

- *Type:* string

---

##### `TotalStorageGrowthBytes`<sup>Required</sup> <a name="TotalStorageGrowthBytes" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```csharp
public string TotalStorageGrowthBytes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlProjectIntelligenceFindingRevision.DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets</a>

---




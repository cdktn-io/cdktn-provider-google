# `dataGoogleStorageControlOrganizationIntelligenceFindingsSummary` Submodule <a name="`dataGoogleStorageControlOrganizationIntelligenceFindingsSummary` Submodule" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummary <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummary" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary google_storage_control_organization_intelligence_findings_summary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummary(Construct Scope, string Id, DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetResourceScope">ResetResourceScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetResourceScope` <a name="ResetResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.resetResourceScope"></a>

```csharp
private void ResetResourceScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlOrganizationIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleStorageControlOrganizationIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageControlOrganizationIntelligenceFindingsSummary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageControlOrganizationIntelligenceFindingsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlOrganizationIntelligenceFindingsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.findingSummaries">FindingSummaries</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScopeInput">ResourceScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScope">ResourceScope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `FindingSummaries`<sup>Required</sup> <a name="FindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.findingSummaries"></a>

```csharp
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList FindingSummaries { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `ResourceScopeInput`<sup>Optional</sup> <a name="ResourceScopeInput" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScopeInput"></a>

```csharp
public string ResourceScopeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `ResourceScope`<sup>Required</sup> <a name="ResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.resourceScope"></a>

```csharp
public string ResourceScope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Organization,
    string Filter = null,
    string Id = null,
    string Location = null,
    string ResourceScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.organization">Organization</a></code> | <code>string</code> | The ID of the Google Cloud Organization. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.filter">Filter</a></code> | <code>string</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.location">Location</a></code> | <code>string</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.resourceScope">ResourceScope</a></code> | <code>string</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The ID of the Google Cloud Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#organization DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#organization}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#filter DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#id DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#location DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#location}

---

##### `ResourceScope`<sup>Optional</sup> <a name="ResourceScope" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryConfig.property.resourceScope"></a>

```csharp
public string ResourceScope { get; set; }
```

- *Type:* string

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/data-sources/storage_control_organization_intelligence_findings_summary#resource_scope DataGoogleStorageControlOrganizationIntelligenceFindingsSummary#resource_scope}

---

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries {

};
```


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get"></a>

```csharp
private DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails">SummaryDetails</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource">TargetResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `SummaryDetails`<sup>Required</sup> <a name="SummaryDetails" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails"></a>

```csharp
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList SummaryDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a>

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource"></a>

```csharp
public string TargetResource { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummaries</a>

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get"></a>

```csharp
private DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count">Count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count"></a>

```csharp
public string Count { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageControlOrganizationIntelligenceFindingsSummary.DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlOrganizationIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a>

---




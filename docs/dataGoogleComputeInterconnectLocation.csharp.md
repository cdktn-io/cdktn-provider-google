# `dataGoogleComputeInterconnectLocation` Submodule <a name="`dataGoogleComputeInterconnectLocation` Submodule" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInterconnectLocation <a name="DataGoogleComputeInterconnectLocation" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_interconnect_location google_compute_interconnect_location}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeInterconnectLocation(Construct Scope, string Id, DataGoogleComputeInterconnectLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig">DataGoogleComputeInterconnectLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig">DataGoogleComputeInterconnectLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeInterconnectLocation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeInterconnectLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeInterconnectLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeInterconnectLocation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeInterconnectLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleComputeInterconnectLocation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeInterconnectLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeInterconnectLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_interconnect_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInterconnectLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.continent">Continent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.facilityProvider">FacilityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.facilityProviderFacilityId">FacilityProviderFacilityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.peeringdbFacilityId">PeeringdbFacilityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Continent`<sup>Required</sup> <a name="Continent" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.continent"></a>

```csharp
public string Continent { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FacilityProvider`<sup>Required</sup> <a name="FacilityProvider" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.facilityProvider"></a>

```csharp
public string FacilityProvider { get; }
```

- *Type:* string

---

##### `FacilityProviderFacilityId`<sup>Required</sup> <a name="FacilityProviderFacilityId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.facilityProviderFacilityId"></a>

```csharp
public string FacilityProviderFacilityId { get; }
```

- *Type:* string

---

##### `PeeringdbFacilityId`<sup>Required</sup> <a name="PeeringdbFacilityId" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.peeringdbFacilityId"></a>

```csharp
public string PeeringdbFacilityId { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInterconnectLocationConfig <a name="DataGoogleComputeInterconnectLocationConfig" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeInterconnectLocationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_interconnect_location#name DataGoogleComputeInterconnectLocation#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_interconnect_location#id DataGoogleComputeInterconnectLocation#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_interconnect_location#project DataGoogleComputeInterconnectLocation#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_interconnect_location#name DataGoogleComputeInterconnectLocation#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_interconnect_location#id DataGoogleComputeInterconnectLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeInterconnectLocation.DataGoogleComputeInterconnectLocationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/compute_interconnect_location#project DataGoogleComputeInterconnectLocation#project}.

---




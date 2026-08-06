# `dataGoogleComputeReservationBlock` Submodule <a name="`dataGoogleComputeReservationBlock` Submodule" id="@cdktn/provider-google.dataGoogleComputeReservationBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeReservationBlock <a name="DataGoogleComputeReservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_reservation_block google_compute_reservation_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlock(Construct Scope, string Id, DataGoogleComputeReservationBlockConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig">DataGoogleComputeReservationBlockConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig">DataGoogleComputeReservationBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeReservationBlock resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeReservationBlock.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeReservationBlock.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeReservationBlock.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComputeReservationBlock.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleComputeReservationBlock resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeReservationBlock to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeReservationBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_reservation_block#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeReservationBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.blockCount">BlockCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.healthInfo">HealthInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList">DataGoogleComputeReservationBlockHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.inUseCount">InUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.physicalTopology">PhysicalTopology</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList">DataGoogleComputeReservationBlockPhysicalTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationMaintenance">ReservationMaintenance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList">DataGoogleComputeReservationBlockReservationMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationSubBlockCount">ReservationSubBlockCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationSubBlockInUseCount">ReservationSubBlockInUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.subBlockNames">SubBlockNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationInput">ReservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservation">Reservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BlockCount`<sup>Required</sup> <a name="BlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.blockCount"></a>

```csharp
public double BlockCount { get; }
```

- *Type:* double

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `HealthInfo`<sup>Required</sup> <a name="HealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.healthInfo"></a>

```csharp
public DataGoogleComputeReservationBlockHealthInfoList HealthInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList">DataGoogleComputeReservationBlockHealthInfoList</a>

---

##### `InUseCount`<sup>Required</sup> <a name="InUseCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.inUseCount"></a>

```csharp
public double InUseCount { get; }
```

- *Type:* double

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `PhysicalTopology`<sup>Required</sup> <a name="PhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.physicalTopology"></a>

```csharp
public DataGoogleComputeReservationBlockPhysicalTopologyList PhysicalTopology { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList">DataGoogleComputeReservationBlockPhysicalTopologyList</a>

---

##### `ReservationMaintenance`<sup>Required</sup> <a name="ReservationMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationMaintenance"></a>

```csharp
public DataGoogleComputeReservationBlockReservationMaintenanceList ReservationMaintenance { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList">DataGoogleComputeReservationBlockReservationMaintenanceList</a>

---

##### `ReservationSubBlockCount`<sup>Required</sup> <a name="ReservationSubBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationSubBlockCount"></a>

```csharp
public double ReservationSubBlockCount { get; }
```

- *Type:* double

---

##### `ReservationSubBlockInUseCount`<sup>Required</sup> <a name="ReservationSubBlockInUseCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationSubBlockInUseCount"></a>

```csharp
public double ReservationSubBlockInUseCount { get; }
```

- *Type:* double

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.selfLinkWithId"></a>

```csharp
public string SelfLinkWithId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubBlockNames`<sup>Required</sup> <a name="SubBlockNames" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.subBlockNames"></a>

```csharp
public string[] SubBlockNames { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReservationInput`<sup>Optional</sup> <a name="ReservationInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationInput"></a>

```csharp
public string ReservationInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Reservation`<sup>Required</sup> <a name="Reservation" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservation"></a>

```csharp
public string Reservation { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeReservationBlockConfig <a name="DataGoogleComputeReservationBlockConfig" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Reservation,
    string Id = null,
    string Project = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.name">Name</a></code> | <code>string</code> | The name of the reservation block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.reservation">Reservation</a></code> | <code>string</code> | The name of the parent reservation. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_reservation_block#id DataGoogleComputeReservationBlock#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.project">Project</a></code> | <code>string</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.zone">Zone</a></code> | <code>string</code> | The zone where the reservation block resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_reservation_block#name DataGoogleComputeReservationBlock#name}

---

##### `Reservation`<sup>Required</sup> <a name="Reservation" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.reservation"></a>

```csharp
public string Reservation { get; set; }
```

- *Type:* string

The name of the parent reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_reservation_block#reservation DataGoogleComputeReservationBlock#reservation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_reservation_block#id DataGoogleComputeReservationBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_reservation_block#project DataGoogleComputeReservationBlock#project}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone where the reservation block resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_reservation_block#zone DataGoogleComputeReservationBlock#zone}

---

### DataGoogleComputeReservationBlockHealthInfo <a name="DataGoogleComputeReservationBlockHealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockHealthInfo {

};
```


### DataGoogleComputeReservationBlockPhysicalTopology <a name="DataGoogleComputeReservationBlockPhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopology"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopology.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockPhysicalTopology {

};
```


### DataGoogleComputeReservationBlockReservationMaintenance <a name="DataGoogleComputeReservationBlockReservationMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockReservationMaintenance {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeReservationBlockHealthInfoList <a name="DataGoogleComputeReservationBlockHealthInfoList" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockHealthInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.get"></a>

```csharp
private DataGoogleComputeReservationBlockHealthInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeReservationBlockHealthInfoOutputReference <a name="DataGoogleComputeReservationBlockHealthInfoOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockHealthInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.degradedSubBlockCount">DegradedSubBlockCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.healthStatus">HealthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.healthySubBlockCount">HealthySubBlockCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfo">DataGoogleComputeReservationBlockHealthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DegradedSubBlockCount`<sup>Required</sup> <a name="DegradedSubBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.degradedSubBlockCount"></a>

```csharp
public double DegradedSubBlockCount { get; }
```

- *Type:* double

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.healthStatus"></a>

```csharp
public string HealthStatus { get; }
```

- *Type:* string

---

##### `HealthySubBlockCount`<sup>Required</sup> <a name="HealthySubBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.healthySubBlockCount"></a>

```csharp
public double HealthySubBlockCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeReservationBlockHealthInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfo">DataGoogleComputeReservationBlockHealthInfo</a>

---


### DataGoogleComputeReservationBlockPhysicalTopologyList <a name="DataGoogleComputeReservationBlockPhysicalTopologyList" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockPhysicalTopologyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.get"></a>

```csharp
private DataGoogleComputeReservationBlockPhysicalTopologyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeReservationBlockPhysicalTopologyOutputReference <a name="DataGoogleComputeReservationBlockPhysicalTopologyOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockPhysicalTopologyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.block">Block</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopology">DataGoogleComputeReservationBlockPhysicalTopology</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.block"></a>

```csharp
public string Block { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeReservationBlockPhysicalTopology InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopology">DataGoogleComputeReservationBlockPhysicalTopology</a>

---


### DataGoogleComputeReservationBlockReservationMaintenanceList <a name="DataGoogleComputeReservationBlockReservationMaintenanceList" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockReservationMaintenanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.get"></a>

```csharp
private DataGoogleComputeReservationBlockReservationMaintenanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeReservationBlockReservationMaintenanceOutputReference <a name="DataGoogleComputeReservationBlockReservationMaintenanceOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComputeReservationBlockReservationMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">InstanceMaintenanceOngoingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount">InstanceMaintenancePendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.maintenanceOngoingCount">MaintenanceOngoingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.maintenancePendingCount">MaintenancePendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.schedulingType">SchedulingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">SubblockInfraMaintenanceOngoingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">SubblockInfraMaintenancePendingCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenance">DataGoogleComputeReservationBlockReservationMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceMaintenanceOngoingCount`<sup>Required</sup> <a name="InstanceMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```csharp
public double InstanceMaintenanceOngoingCount { get; }
```

- *Type:* double

---

##### `InstanceMaintenancePendingCount`<sup>Required</sup> <a name="InstanceMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```csharp
public double InstanceMaintenancePendingCount { get; }
```

- *Type:* double

---

##### `MaintenanceOngoingCount`<sup>Required</sup> <a name="MaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```csharp
public double MaintenanceOngoingCount { get; }
```

- *Type:* double

---

##### `MaintenancePendingCount`<sup>Required</sup> <a name="MaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.maintenancePendingCount"></a>

```csharp
public double MaintenancePendingCount { get; }
```

- *Type:* double

---

##### `SchedulingType`<sup>Required</sup> <a name="SchedulingType" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.schedulingType"></a>

```csharp
public string SchedulingType { get; }
```

- *Type:* string

---

##### `SubblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="SubblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```csharp
public double SubblockInfraMaintenanceOngoingCount { get; }
```

- *Type:* double

---

##### `SubblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="SubblockInfraMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```csharp
public double SubblockInfraMaintenancePendingCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeReservationBlockReservationMaintenance InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenance">DataGoogleComputeReservationBlockReservationMaintenance</a>

---




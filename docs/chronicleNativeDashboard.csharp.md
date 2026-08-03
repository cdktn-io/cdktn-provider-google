# `chronicleNativeDashboard` Submodule <a name="`chronicleNativeDashboard` Submodule" id="@cdktn/provider-google.chronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleNativeDashboard <a name="ChronicleNativeDashboard" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboard(Construct Scope, string Id, ChronicleNativeDashboardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig">ChronicleNativeDashboardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig">ChronicleNativeDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts">PutCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts">ResetCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned">ResetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCharts` <a name="PutCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts"></a>

```csharp
private void PutCharts(IResolvable|ChronicleNativeDashboardCharts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters"></a>

```csharp
private void PutFilters(IResolvable|ChronicleNativeDashboardFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleNativeDashboardTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetCharts` <a name="ResetCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts"></a>

```csharp
private void ResetCharts()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsPinned` <a name="ResetIsPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned"></a>

```csharp
private void ResetIsPinned()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleNativeDashboard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleNativeDashboard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleNativeDashboard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleNativeDashboard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleNativeDashboard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts">Charts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId">CreateUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime">LastViewedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId">UpdateUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput">ChartsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput">IsPinnedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned">IsPinned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Charts`<sup>Required</sup> <a name="Charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts"></a>

```csharp
public ChronicleNativeDashboardChartsList Charts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreateUserId`<sup>Required</sup> <a name="CreateUserId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId"></a>

```csharp
public string CreateUserId { get; }
```

- *Type:* string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters"></a>

```csharp
public ChronicleNativeDashboardFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `LastViewedTime`<sup>Required</sup> <a name="LastViewedTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime"></a>

```csharp
public string LastViewedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts"></a>

```csharp
public ChronicleNativeDashboardTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UpdateUserId`<sup>Required</sup> <a name="UpdateUserId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId"></a>

```csharp
public string UpdateUserId { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `ChartsInput`<sup>Optional</sup> <a name="ChartsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput"></a>

```csharp
public IResolvable|ChronicleNativeDashboardCharts[] ChartsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput"></a>

```csharp
public IResolvable|ChronicleNativeDashboardFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IsPinnedInput`<sup>Optional</sup> <a name="IsPinnedInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput"></a>

```csharp
public bool|IResolvable IsPinnedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput"></a>

```csharp
public IResolvable|ChronicleNativeDashboardTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `IsPinned`<sup>Required</sup> <a name="IsPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned"></a>

```csharp
public bool|IResolvable IsPinned { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleNativeDashboardCharts <a name="ChronicleNativeDashboardCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardCharts {
    ChronicleNativeDashboardChartsChartLayout ChartLayout = null,
    string DashboardChart = null,
    string[] FiltersIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout">ChartLayout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart">DashboardChart</a></code> | <code>string</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds">FiltersIds</a></code> | <code>string[]</code> | List of dashboard filter IDs applied to this chart. |

---

##### `ChartLayout`<sup>Optional</sup> <a name="ChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout"></a>

```csharp
public ChronicleNativeDashboardChartsChartLayout ChartLayout { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#chart_layout ChronicleNativeDashboard#chart_layout}

---

##### `DashboardChart`<sup>Optional</sup> <a name="DashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart"></a>

```csharp
public string DashboardChart { get; set; }
```

- *Type:* string

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#dashboard_chart ChronicleNativeDashboard#dashboard_chart}

---

##### `FiltersIds`<sup>Optional</sup> <a name="FiltersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds"></a>

```csharp
public string[] FiltersIds { get; set; }
```

- *Type:* string[]

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#filters_ids ChronicleNativeDashboard#filters_ids}

---

### ChronicleNativeDashboardChartsChartLayout <a name="ChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardChartsChartLayout {
    double SpanX,
    double SpanY,
    double StartX = null,
    double StartY = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX">SpanX</a></code> | <code>double</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY">SpanY</a></code> | <code>double</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX">StartX</a></code> | <code>double</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY">StartY</a></code> | <code>double</code> | The starting Y coordinate. |

---

##### `SpanX`<sup>Required</sup> <a name="SpanX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```csharp
public double SpanX { get; set; }
```

- *Type:* double

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#span_x ChronicleNativeDashboard#span_x}

---

##### `SpanY`<sup>Required</sup> <a name="SpanY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```csharp
public double SpanY { get; set; }
```

- *Type:* double

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#span_y ChronicleNativeDashboard#span_y}

---

##### `StartX`<sup>Optional</sup> <a name="StartX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```csharp
public double StartX { get; set; }
```

- *Type:* double

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#start_x ChronicleNativeDashboard#start_x}

---

##### `StartY`<sup>Optional</sup> <a name="StartY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```csharp
public double StartY { get; set; }
```

- *Type:* double

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#start_y ChronicleNativeDashboard#start_y}

---

### ChronicleNativeDashboardConfig <a name="ChronicleNativeDashboardConfig" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Instance,
    string Location,
    string Access = null,
    IResolvable|ChronicleNativeDashboardCharts[] Charts = null,
    string DeletionPolicy = null,
    string Description = null,
    IResolvable|ChronicleNativeDashboardFilters[] Filters = null,
    string Id = null,
    bool|IResolvable IsPinned = null,
    string Project = null,
    ChronicleNativeDashboardTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance">Instance</a></code> | <code>string</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location">Location</a></code> | <code>string</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access">Access</a></code> | <code>string</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts">Charts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]</code> | charts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description">Description</a></code> | <code>string</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]</code> | filters block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned">IsPinned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type">Type</a></code> | <code>string</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#instance ChronicleNativeDashboard#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#location ChronicleNativeDashboard#location}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#access ChronicleNativeDashboard#access}

---

##### `Charts`<sup>Optional</sup> <a name="Charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts"></a>

```csharp
public IResolvable|ChronicleNativeDashboardCharts[] Charts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#charts ChronicleNativeDashboard#charts}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#deletion_policy ChronicleNativeDashboard#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#description ChronicleNativeDashboard#description}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters"></a>

```csharp
public IResolvable|ChronicleNativeDashboardFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#filters ChronicleNativeDashboard#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPinned`<sup>Optional</sup> <a name="IsPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned"></a>

```csharp
public bool|IResolvable IsPinned { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#is_pinned ChronicleNativeDashboard#is_pinned}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts"></a>

```csharp
public ChronicleNativeDashboardTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#timeouts ChronicleNativeDashboard#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#type ChronicleNativeDashboard#type}

---

### ChronicleNativeDashboardFilters <a name="ChronicleNativeDashboardFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardFilters {
    string[] ChartIds = null,
    string DataSource = null,
    string DisplayName = null,
    string FieldPath = null,
    IResolvable|ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] FilterOperatorAndFieldValues = null,
    string Id = null,
    bool|IResolvable IsMandatory = null,
    bool|IResolvable IsStandardTimeRangeFilter = null,
    bool|IResolvable IsStandardTimeRangeFilterEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds">ChartIds</a></code> | <code>string[]</code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource">DataSource</a></code> | <code>string</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath">FieldPath</a></code> | <code>string</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">FilterOperatorAndFieldValues</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id">Id</a></code> | <code>string</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory">IsMandatory</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">IsStandardTimeRangeFilter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">IsStandardTimeRangeFilterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the standard time range filter is currently enabled. |

---

##### `ChartIds`<sup>Optional</sup> <a name="ChartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds"></a>

```csharp
public string[] ChartIds { get; set; }
```

- *Type:* string[]

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#chart_ids ChronicleNativeDashboard#chart_ids}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#data_source ChronicleNativeDashboard#data_source}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath"></a>

```csharp
public string FieldPath { get; set; }
```

- *Type:* string

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#field_path ChronicleNativeDashboard#field_path}

---

##### `FilterOperatorAndFieldValues`<sup>Optional</sup> <a name="FilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```csharp
public IResolvable|ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] FilterOperatorAndFieldValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#filter_operator_and_field_values ChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsMandatory`<sup>Optional</sup> <a name="IsMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory"></a>

```csharp
public bool|IResolvable IsMandatory { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#is_mandatory ChronicleNativeDashboard#is_mandatory}

---

##### `IsStandardTimeRangeFilter`<sup>Optional</sup> <a name="IsStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilter { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter ChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `IsStandardTimeRangeFilterEnabled`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilterEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter_enabled ChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues {
    string[] FieldValues = null,
    string FilterOperator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">FieldValues</a></code> | <code>string[]</code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">FilterOperator</a></code> | <code>string</code> | The operator to apply to the field. |

---

##### `FieldValues`<sup>Optional</sup> <a name="FieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```csharp
public string[] FieldValues { get; set; }
```

- *Type:* string[]

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#field_values ChronicleNativeDashboard#field_values}

---

##### `FilterOperator`<sup>Optional</sup> <a name="FilterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```csharp
public string FilterOperator { get; set; }
```

- *Type:* string

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#filter_operator ChronicleNativeDashboard#filter_operator}

---

### ChronicleNativeDashboardTimeouts <a name="ChronicleNativeDashboardTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleNativeDashboardChartsChartLayoutOutputReference <a name="ChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardChartsChartLayoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">ResetStartX</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">ResetStartY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartX` <a name="ResetStartX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```csharp
private void ResetStartX()
```

##### `ResetStartY` <a name="ResetStartY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```csharp
private void ResetStartY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">SpanXInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">SpanYInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">StartXInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">StartYInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">SpanX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">SpanY</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">StartX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">StartY</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpanXInput`<sup>Optional</sup> <a name="SpanXInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```csharp
public double SpanXInput { get; }
```

- *Type:* double

---

##### `SpanYInput`<sup>Optional</sup> <a name="SpanYInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```csharp
public double SpanYInput { get; }
```

- *Type:* double

---

##### `StartXInput`<sup>Optional</sup> <a name="StartXInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```csharp
public double StartXInput { get; }
```

- *Type:* double

---

##### `StartYInput`<sup>Optional</sup> <a name="StartYInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```csharp
public double StartYInput { get; }
```

- *Type:* double

---

##### `SpanX`<sup>Required</sup> <a name="SpanX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```csharp
public double SpanX { get; }
```

- *Type:* double

---

##### `SpanY`<sup>Required</sup> <a name="SpanY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```csharp
public double SpanY { get; }
```

- *Type:* double

---

##### `StartX`<sup>Required</sup> <a name="StartX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```csharp
public double StartX { get; }
```

- *Type:* double

---

##### `StartY`<sup>Required</sup> <a name="StartY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```csharp
public double StartY { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```csharp
public ChronicleNativeDashboardChartsChartLayout InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---


### ChronicleNativeDashboardChartsList <a name="ChronicleNativeDashboardChartsList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardChartsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get"></a>

```csharp
private ChronicleNativeDashboardChartsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue"></a>

```csharp
public IResolvable|ChronicleNativeDashboardCharts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]

---


### ChronicleNativeDashboardChartsOutputReference <a name="ChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardChartsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout">PutChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout">ResetChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart">ResetDashboardChart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds">ResetFiltersIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChartLayout` <a name="PutChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```csharp
private void PutChartLayout(ChronicleNativeDashboardChartsChartLayout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `ResetChartLayout` <a name="ResetChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```csharp
private void ResetChartLayout()
```

##### `ResetDashboardChart` <a name="ResetDashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```csharp
private void ResetDashboardChart()
```

##### `ResetFiltersIds` <a name="ResetFiltersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```csharp
private void ResetFiltersIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout">ChartLayout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">ChartLayoutInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">DashboardChartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">FiltersIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart">DashboardChart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds">FiltersIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChartLayout`<sup>Required</sup> <a name="ChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```csharp
public ChronicleNativeDashboardChartsChartLayoutOutputReference ChartLayout { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `ChartLayoutInput`<sup>Optional</sup> <a name="ChartLayoutInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```csharp
public ChronicleNativeDashboardChartsChartLayout ChartLayoutInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `DashboardChartInput`<sup>Optional</sup> <a name="DashboardChartInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```csharp
public string DashboardChartInput { get; }
```

- *Type:* string

---

##### `FiltersIdsInput`<sup>Optional</sup> <a name="FiltersIdsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```csharp
public string[] FiltersIdsInput { get; }
```

- *Type:* string[]

---

##### `DashboardChart`<sup>Required</sup> <a name="DashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```csharp
public string DashboardChart { get; }
```

- *Type:* string

---

##### `FiltersIds`<sup>Required</sup> <a name="FiltersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```csharp
public string[] FiltersIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleNativeDashboardCharts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```csharp
private ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```csharp
public IResolvable|ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">ResetFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">ResetFilterOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldValues` <a name="ResetFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```csharp
private void ResetFieldValues()
```

##### `ResetFilterOperator` <a name="ResetFilterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```csharp
private void ResetFilterOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">FieldValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">FilterOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">FieldValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">FilterOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldValuesInput`<sup>Optional</sup> <a name="FieldValuesInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```csharp
public string[] FieldValuesInput { get; }
```

- *Type:* string[]

---

##### `FilterOperatorInput`<sup>Optional</sup> <a name="FilterOperatorInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```csharp
public string FilterOperatorInput { get; }
```

- *Type:* string

---

##### `FieldValues`<sup>Required</sup> <a name="FieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```csharp
public string[] FieldValues { get; }
```

- *Type:* string[]

---

##### `FilterOperator`<sup>Required</sup> <a name="FilterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```csharp
public string FilterOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>

---


### ChronicleNativeDashboardFiltersList <a name="ChronicleNativeDashboardFiltersList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get"></a>

```csharp
private ChronicleNativeDashboardFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue"></a>

```csharp
public IResolvable|ChronicleNativeDashboardFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]

---


### ChronicleNativeDashboardFiltersOutputReference <a name="ChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">PutFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds">ResetChartIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">ResetFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">ResetIsMandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">ResetIsStandardTimeRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">ResetIsStandardTimeRangeFilterEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterOperatorAndFieldValues` <a name="PutFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```csharp
private void PutFilterOperatorAndFieldValues(IResolvable|ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---

##### `ResetChartIds` <a name="ResetChartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```csharp
private void ResetChartIds()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```csharp
private void ResetDataSource()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```csharp
private void ResetFieldPath()
```

##### `ResetFilterOperatorAndFieldValues` <a name="ResetFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```csharp
private void ResetFilterOperatorAndFieldValues()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsMandatory` <a name="ResetIsMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```csharp
private void ResetIsMandatory()
```

##### `ResetIsStandardTimeRangeFilter` <a name="ResetIsStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```csharp
private void ResetIsStandardTimeRangeFilter()
```

##### `ResetIsStandardTimeRangeFilterEnabled` <a name="ResetIsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```csharp
private void ResetIsStandardTimeRangeFilterEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">FilterOperatorAndFieldValues</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">ChartIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">FilterOperatorAndFieldValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">IsMandatoryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">IsStandardTimeRangeFilterEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">IsStandardTimeRangeFilterInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds">ChartIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath">FieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory">IsMandatory</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">IsStandardTimeRangeFilter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">IsStandardTimeRangeFilterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterOperatorAndFieldValues`<sup>Required</sup> <a name="FilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```csharp
public ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList FilterOperatorAndFieldValues { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `ChartIdsInput`<sup>Optional</sup> <a name="ChartIdsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```csharp
public string[] ChartIdsInput { get; }
```

- *Type:* string[]

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```csharp
public string FieldPathInput { get; }
```

- *Type:* string

---

##### `FilterOperatorAndFieldValuesInput`<sup>Optional</sup> <a name="FilterOperatorAndFieldValuesInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```csharp
public IResolvable|ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] FilterOperatorAndFieldValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsMandatoryInput`<sup>Optional</sup> <a name="IsMandatoryInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```csharp
public bool|IResolvable IsMandatoryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsStandardTimeRangeFilterEnabledInput`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterEnabledInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilterEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsStandardTimeRangeFilterInput`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilterInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ChartIds`<sup>Required</sup> <a name="ChartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```csharp
public string[] ChartIds { get; }
```

- *Type:* string[]

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```csharp
public string FieldPath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatory`<sup>Required</sup> <a name="IsMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```csharp
public bool|IResolvable IsMandatory { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsStandardTimeRangeFilter`<sup>Required</sup> <a name="IsStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilter { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsStandardTimeRangeFilterEnabled`<sup>Required</sup> <a name="IsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilterEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleNativeDashboardFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>

---


### ChronicleNativeDashboardTimeoutsOutputReference <a name="ChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleNativeDashboardTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleNativeDashboardTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---




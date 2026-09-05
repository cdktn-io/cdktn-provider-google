# `lustreInstance` Submodule <a name="`lustreInstance` Submodule" id="@cdktn/provider-google.lustreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LustreInstance <a name="LustreInstance" id="@cdktn/provider-google.lustreInstance.LustreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance google_lustre_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstance(Construct Scope, string Id, LustreInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig">LustreInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig">LustreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions">PutAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions">PutDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetAccessRulesOptions">ResetAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetDynamicTierOptions">ResetDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetGkeSupportEnabled">ResetGkeSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetPerUnitStorageThroughput">ResetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetPlacementPolicy">ResetPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.lustreInstance.LustreInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.lustreInstance.LustreInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.lustreInstance.LustreInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.lustreInstance.LustreInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.lustreInstance.LustreInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.lustreInstance.LustreInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRulesOptions` <a name="PutAccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions"></a>

```csharp
private void PutAccessRulesOptions(LustreInstanceAccessRulesOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

---

##### `PutDynamicTierOptions` <a name="PutDynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions"></a>

```csharp
private void PutDynamicTierOptions(LustreInstanceDynamicTierOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy"></a>

```csharp
private void PutMaintenancePolicy(LustreInstanceMaintenancePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(LustreInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

---

##### `ResetAccessRulesOptions` <a name="ResetAccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetAccessRulesOptions"></a>

```csharp
private void ResetAccessRulesOptions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDynamicTierOptions` <a name="ResetDynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetDynamicTierOptions"></a>

```csharp
private void ResetDynamicTierOptions()
```

##### `ResetGkeSupportEnabled` <a name="ResetGkeSupportEnabled" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetGkeSupportEnabled"></a>

```csharp
private void ResetGkeSupportEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetMaintenancePolicy"></a>

```csharp
private void ResetMaintenancePolicy()
```

##### `ResetPerUnitStorageThroughput` <a name="ResetPerUnitStorageThroughput" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetPerUnitStorageThroughput"></a>

```csharp
private void ResetPerUnitStorageThroughput()
```

##### `ResetPlacementPolicy` <a name="ResetPlacementPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetPlacementPolicy"></a>

```csharp
private void ResetPlacementPolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LustreInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

LustreInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

LustreInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

LustreInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

LustreInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LustreInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LustreInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LustreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LustreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptions">AccessRulesOptions</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference">LustreInstanceAccessRulesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptions">DynamicTierOptions</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference">LustreInstanceDynamicTierOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference">LustreInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference">LustreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.upcomingMaintenanceSchedule">UpcomingMaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList">LustreInstanceUpcomingMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptionsInput">AccessRulesOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGibInput">CapacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptionsInput">DynamicTierOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystemInput">FilesystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabledInput">GkeSupportEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughputInput">PerUnitStorageThroughputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicyInput">PlacementPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGib">CapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystem">Filesystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabled">GkeSupportEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicy">PlacementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessRulesOptions`<sup>Required</sup> <a name="AccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptions"></a>

```csharp
public LustreInstanceAccessRulesOptionsOutputReference AccessRulesOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference">LustreInstanceAccessRulesOptionsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DynamicTierOptions`<sup>Required</sup> <a name="DynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptions"></a>

```csharp
public LustreInstanceDynamicTierOptionsOutputReference DynamicTierOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference">LustreInstanceDynamicTierOptionsOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicy"></a>

```csharp
public LustreInstanceMaintenancePolicyOutputReference MaintenancePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference">LustreInstanceMaintenancePolicyOutputReference</a>

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.timeouts"></a>

```csharp
public LustreInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference">LustreInstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpcomingMaintenanceSchedule`<sup>Required</sup> <a name="UpcomingMaintenanceSchedule" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.upcomingMaintenanceSchedule"></a>

```csharp
public LustreInstanceUpcomingMaintenanceScheduleList UpcomingMaintenanceSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList">LustreInstanceUpcomingMaintenanceScheduleList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessRulesOptionsInput`<sup>Optional</sup> <a name="AccessRulesOptionsInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptionsInput"></a>

```csharp
public LustreInstanceAccessRulesOptions AccessRulesOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGibInput"></a>

```csharp
public string CapacityGibInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DynamicTierOptionsInput`<sup>Optional</sup> <a name="DynamicTierOptionsInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptionsInput"></a>

```csharp
public LustreInstanceDynamicTierOptions DynamicTierOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

---

##### `FilesystemInput`<sup>Optional</sup> <a name="FilesystemInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystemInput"></a>

```csharp
public string FilesystemInput { get; }
```

- *Type:* string

---

##### `GkeSupportEnabledInput`<sup>Optional</sup> <a name="GkeSupportEnabledInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabledInput"></a>

```csharp
public bool|IResolvable GkeSupportEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicyInput"></a>

```csharp
public LustreInstanceMaintenancePolicy MaintenancePolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PerUnitStorageThroughputInput`<sup>Optional</sup> <a name="PerUnitStorageThroughputInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughputInput"></a>

```csharp
public string PerUnitStorageThroughputInput { get; }
```

- *Type:* string

---

##### `PlacementPolicyInput`<sup>Optional</sup> <a name="PlacementPolicyInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicyInput"></a>

```csharp
public string PlacementPolicyInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.timeoutsInput"></a>

```csharp
public IResolvable|LustreInstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGib"></a>

```csharp
public string CapacityGib { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystem"></a>

```csharp
public string Filesystem { get; }
```

- *Type:* string

---

##### `GkeSupportEnabled`<sup>Required</sup> <a name="GkeSupportEnabled" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabled"></a>

```csharp
public bool|IResolvable GkeSupportEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughput"></a>

```csharp
public string PerUnitStorageThroughput { get; }
```

- *Type:* string

---

##### `PlacementPolicy`<sup>Required</sup> <a name="PlacementPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicy"></a>

```csharp
public string PlacementPolicy { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LustreInstanceAccessRulesOptions <a name="LustreInstanceAccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceAccessRulesOptions {
    string DefaultSquashMode,
    IResolvable|LustreInstanceAccessRulesOptionsAccessRules[] AccessRules = null,
    double DefaultSquashGid = null,
    double DefaultSquashUid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashMode">DefaultSquashMode</a></code> | <code>string</code> | The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.accessRules">AccessRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]</code> | access_rules block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashGid">DefaultSquashGid</a></code> | <code>double</code> | The user squash GID for the default access rule. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashUid">DefaultSquashUid</a></code> | <code>double</code> | The user squash UID for the default access rule. |

---

##### `DefaultSquashMode`<sup>Required</sup> <a name="DefaultSquashMode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashMode"></a>

```csharp
public string DefaultSquashMode { get; set; }
```

- *Type:* string

The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#default_squash_mode LustreInstance#default_squash_mode}

---

##### `AccessRules`<sup>Optional</sup> <a name="AccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.accessRules"></a>

```csharp
public IResolvable|LustreInstanceAccessRulesOptionsAccessRules[] AccessRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#access_rules LustreInstance#access_rules}

---

##### `DefaultSquashGid`<sup>Optional</sup> <a name="DefaultSquashGid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashGid"></a>

```csharp
public double DefaultSquashGid { get; set; }
```

- *Type:* double

The user squash GID for the default access rule.

This user squash GID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no GID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#default_squash_gid LustreInstance#default_squash_gid}

---

##### `DefaultSquashUid`<sup>Optional</sup> <a name="DefaultSquashUid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashUid"></a>

```csharp
public double DefaultSquashUid { get; set; }
```

- *Type:* double

The user squash UID for the default access rule.

This user squash UID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no UID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#default_squash_uid LustreInstance#default_squash_uid}

---

### LustreInstanceAccessRulesOptionsAccessRules <a name="LustreInstanceAccessRulesOptionsAccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceAccessRulesOptionsAccessRules {
    string[] IpAddressRanges,
    string Name,
    string SquashMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.ipAddressRanges">IpAddressRanges</a></code> | <code>string[]</code> | The IP address ranges to which to apply this access rule. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.name">Name</a></code> | <code>string</code> | The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.squashMode">SquashMode</a></code> | <code>string</code> | Squash mode for the access rule. Possible values: NO_SQUASH ROOT_SQUASH. |

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.ipAddressRanges"></a>

```csharp
public string[] IpAddressRanges { get; set; }
```

- *Type:* string[]

The IP address ranges to which to apply this access rule.

Accepts
non-overlapping CIDR ranges (e.g., '192.168.1.0/24') and IP addresses
(e.g., '192.168.1.0').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#ip_address_ranges LustreInstance#ip_address_ranges}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#name LustreInstance#name}

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.squashMode"></a>

```csharp
public string SquashMode { get; set; }
```

- *Type:* string

Squash mode for the access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#squash_mode LustreInstance#squash_mode}

---

### LustreInstanceConfig <a name="LustreInstanceConfig" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CapacityGib,
    string Filesystem,
    string InstanceId,
    string Location,
    string Network,
    LustreInstanceAccessRulesOptions AccessRulesOptions = null,
    string DeletionPolicy = null,
    string Description = null,
    LustreInstanceDynamicTierOptions DynamicTierOptions = null,
    bool|IResolvable GkeSupportEnabled = null,
    string Id = null,
    string KmsKey = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    LustreInstanceMaintenancePolicy MaintenancePolicy = null,
    string PerUnitStorageThroughput = null,
    string PlacementPolicy = null,
    string Project = null,
    LustreInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.capacityGib">CapacityGib</a></code> | <code>string</code> | The storage capacity of the instance in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.filesystem">Filesystem</a></code> | <code>string</code> | The filesystem name for this instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | The name of the Managed Lustre instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.network">Network</a></code> | <code>string</code> | The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.accessRulesOptions">AccessRulesOptions</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | access_rules_options block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.description">Description</a></code> | <code>string</code> | A user-readable description of the instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dynamicTierOptions">DynamicTierOptions</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | dynamic_tier_options block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.gkeSupportEnabled">GkeSupportEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#id LustreInstance#id}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS key name to use for data encryption. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>string</code> | The throughput of the instance in MBps per TiB. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.placementPolicy">PlacementPolicy</a></code> | <code>string</code> | The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#project LustreInstance#project}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.capacityGib"></a>

```csharp
public string CapacityGib { get; set; }
```

- *Type:* string

The storage capacity of the instance in gibibytes (GiB).

Allowed values
are from '9000' to '7632000', depending on the 'perUnitStorageThroughput'.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for specific minimums, maximums, and step sizes for each performance tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#capacity_gib LustreInstance#capacity_gib}

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.filesystem"></a>

```csharp
public string Filesystem { get; set; }
```

- *Type:* string

The filesystem name for this instance.

This name is used by client-side
tools, including when mounting the instance. Must be eight characters or
less and can only contain letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#filesystem LustreInstance#filesystem}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The name of the Managed Lustre instance.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#instance_id LustreInstance#instance_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#location LustreInstance#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#network LustreInstance#network}

---

##### `AccessRulesOptions`<sup>Optional</sup> <a name="AccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.accessRulesOptions"></a>

```csharp
public LustreInstanceAccessRulesOptions AccessRulesOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

access_rules_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#access_rules_options LustreInstance#access_rules_options}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#deletion_policy LustreInstance#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-readable description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#description LustreInstance#description}

---

##### `DynamicTierOptions`<sup>Optional</sup> <a name="DynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dynamicTierOptions"></a>

```csharp
public LustreInstanceDynamicTierOptions DynamicTierOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

dynamic_tier_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#dynamic_tier_options LustreInstance#dynamic_tier_options}

---

##### `GkeSupportEnabled`<sup>Optional</sup> <a name="GkeSupportEnabled" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.gkeSupportEnabled"></a>

```csharp
public bool|IResolvable GkeSupportEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#gke_support_enabled LustreInstance#gke_support_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#id LustreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS key name to use for data encryption.

If not set, the instance will use Google-managed encryption keys.
If set, the instance will use customer-managed encryption keys.
The key must be in the same region as the instance.
The key format is:
projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#kms_key LustreInstance#kms_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#labels LustreInstance#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.maintenancePolicy"></a>

```csharp
public LustreInstanceMaintenancePolicy MaintenancePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#maintenance_policy LustreInstance#maintenance_policy}

---

##### `PerUnitStorageThroughput`<sup>Optional</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.perUnitStorageThroughput"></a>

```csharp
public string PerUnitStorageThroughput { get; set; }
```

- *Type:* string

The throughput of the instance in MBps per TiB.

Valid values are 125, 250,
500, 1000.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for more information.

If the instance is using the Dynamic tier, this field must not be set or
must be set to zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#per_unit_storage_throughput LustreInstance#per_unit_storage_throughput}

---

##### `PlacementPolicy`<sup>Optional</sup> <a name="PlacementPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.placementPolicy"></a>

```csharp
public string PlacementPolicy { get; set; }
```

- *Type:* string

The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#placement_policy LustreInstance#placement_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#project LustreInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.timeouts"></a>

```csharp
public LustreInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#timeouts LustreInstance#timeouts}

---

### LustreInstanceDynamicTierOptions <a name="LustreInstanceDynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceDynamicTierOptions {
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.property.mode">Mode</a></code> | <code>string</code> | The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#mode LustreInstance#mode}

---

### LustreInstanceMaintenancePolicy <a name="LustreInstanceMaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicy {
    LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows WeeklyMaintenanceWindows,
    LustreInstanceMaintenancePolicyMaintenanceExclusionWindow MaintenanceExclusionWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.weeklyMaintenanceWindows">WeeklyMaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | weekly_maintenance_windows block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.maintenanceExclusionWindow">MaintenanceExclusionWindow</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | maintenance_exclusion_window block. |

---

##### `WeeklyMaintenanceWindows`<sup>Required</sup> <a name="WeeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.weeklyMaintenanceWindows"></a>

```csharp
public LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows WeeklyMaintenanceWindows { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

weekly_maintenance_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#weekly_maintenance_windows LustreInstance#weekly_maintenance_windows}

---

##### `MaintenanceExclusionWindow`<sup>Optional</sup> <a name="MaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.maintenanceExclusionWindow"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindow MaintenanceExclusionWindow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

maintenance_exclusion_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#maintenance_exclusion_window LustreInstance#maintenance_exclusion_window}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindow <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyMaintenanceExclusionWindow {
    LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate EndDate,
    LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate StartDate,
    LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.time">Time</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | time block. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.endDate"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate EndDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#end_date LustreInstance#end_date}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.startDate"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate StartDate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#start_date LustreInstance#start_date}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.time"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime Time { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#time LustreInstance#time}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#day LustreInstance#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#month LustreInstance#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#year LustreInstance#year}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate {
    double Day = null,
    double Month = null,
    double Year = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.day">Day</a></code> | <code>double</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.month">Month</a></code> | <code>double</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#day LustreInstance#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#month LustreInstance#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#year LustreInstance#year}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.hours">Hours</a></code> | <code>double</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of a minute. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#hours LustreInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#minutes LustreInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#nanos LustreInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#seconds LustreInstance#seconds}

---

### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows {
    string DayOfWeek,
    LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | start_time block. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#day_of_week LustreInstance#day_of_week}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.startTime"></a>

```csharp
public LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#start_time LustreInstance#start_time}

---

### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.hours">Hours</a></code> | <code>double</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of a minute. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#hours LustreInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#minutes LustreInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#nanos LustreInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#seconds LustreInstance#seconds}

---

### LustreInstanceTimeouts <a name="LustreInstanceTimeouts" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#create LustreInstance#create}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#delete LustreInstance#delete}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#update LustreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#create LustreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#delete LustreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/lustre_instance#update LustreInstance#update}.

---

### LustreInstanceUpcomingMaintenanceSchedule <a name="LustreInstanceUpcomingMaintenanceSchedule" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceUpcomingMaintenanceSchedule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### LustreInstanceAccessRulesOptionsAccessRulesList <a name="LustreInstanceAccessRulesOptionsAccessRulesList" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceAccessRulesOptionsAccessRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get"></a>

```csharp
private LustreInstanceAccessRulesOptionsAccessRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.internalValue"></a>

```csharp
public IResolvable|LustreInstanceAccessRulesOptionsAccessRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]

---


### LustreInstanceAccessRulesOptionsAccessRulesOutputReference <a name="LustreInstanceAccessRulesOptionsAccessRulesOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceAccessRulesOptionsAccessRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRangesInput">IpAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashModeInput">SquashModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges">IpAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode">SquashMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressRangesInput`<sup>Optional</sup> <a name="IpAddressRangesInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRangesInput"></a>

```csharp
public string[] IpAddressRangesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SquashModeInput`<sup>Optional</sup> <a name="SquashModeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashModeInput"></a>

```csharp
public string SquashModeInput { get; }
```

- *Type:* string

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges"></a>

```csharp
public string[] IpAddressRanges { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode"></a>

```csharp
public string SquashMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LustreInstanceAccessRulesOptionsAccessRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>

---


### LustreInstanceAccessRulesOptionsOutputReference <a name="LustreInstanceAccessRulesOptionsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceAccessRulesOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules">PutAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetAccessRules">ResetAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashGid">ResetDefaultSquashGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashUid">ResetDefaultSquashUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessRules` <a name="PutAccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules"></a>

```csharp
private void PutAccessRules(IResolvable|LustreInstanceAccessRulesOptionsAccessRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]

---

##### `ResetAccessRules` <a name="ResetAccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetAccessRules"></a>

```csharp
private void ResetAccessRules()
```

##### `ResetDefaultSquashGid` <a name="ResetDefaultSquashGid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashGid"></a>

```csharp
private void ResetDefaultSquashGid()
```

##### `ResetDefaultSquashUid` <a name="ResetDefaultSquashUid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashUid"></a>

```csharp
private void ResetDefaultSquashUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRules">AccessRules</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList">LustreInstanceAccessRulesOptionsAccessRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRulesInput">AccessRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGidInput">DefaultSquashGidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashModeInput">DefaultSquashModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUidInput">DefaultSquashUidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid">DefaultSquashGid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode">DefaultSquashMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid">DefaultSquashUid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRules"></a>

```csharp
public LustreInstanceAccessRulesOptionsAccessRulesList AccessRules { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList">LustreInstanceAccessRulesOptionsAccessRulesList</a>

---

##### `AccessRulesInput`<sup>Optional</sup> <a name="AccessRulesInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRulesInput"></a>

```csharp
public IResolvable|LustreInstanceAccessRulesOptionsAccessRules[] AccessRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]

---

##### `DefaultSquashGidInput`<sup>Optional</sup> <a name="DefaultSquashGidInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGidInput"></a>

```csharp
public double DefaultSquashGidInput { get; }
```

- *Type:* double

---

##### `DefaultSquashModeInput`<sup>Optional</sup> <a name="DefaultSquashModeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashModeInput"></a>

```csharp
public string DefaultSquashModeInput { get; }
```

- *Type:* string

---

##### `DefaultSquashUidInput`<sup>Optional</sup> <a name="DefaultSquashUidInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUidInput"></a>

```csharp
public double DefaultSquashUidInput { get; }
```

- *Type:* double

---

##### `DefaultSquashGid`<sup>Required</sup> <a name="DefaultSquashGid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid"></a>

```csharp
public double DefaultSquashGid { get; }
```

- *Type:* double

---

##### `DefaultSquashMode`<sup>Required</sup> <a name="DefaultSquashMode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode"></a>

```csharp
public string DefaultSquashMode { get; }
```

- *Type:* string

---

##### `DefaultSquashUid`<sup>Required</sup> <a name="DefaultSquashUid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid"></a>

```csharp
public double DefaultSquashUid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceAccessRulesOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

---


### LustreInstanceDynamicTierOptionsOutputReference <a name="LustreInstanceDynamicTierOptionsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceDynamicTierOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceDynamicTierOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime">PutTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate"></a>

```csharp
private void PutEndDate(LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate"></a>

```csharp
private void PutStartDate(LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---

##### `PutTime` <a name="PutTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime"></a>

```csharp
private void PutTime(LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time">Time</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.timeInput">TimeInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference EndDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference StartDate { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference</a>

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference Time { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDateInput"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate EndDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDateInput"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate StartDateInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.timeInput"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime TimeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetMonth"></a>

```csharp
private void ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetYear"></a>

```csharp
private void ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---


### LustreInstanceMaintenancePolicyOutputReference <a name="LustreInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow">PutMaintenanceExclusionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows">PutWeeklyMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resetMaintenanceExclusionWindow">ResetMaintenanceExclusionWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceExclusionWindow` <a name="PutMaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow"></a>

```csharp
private void PutMaintenanceExclusionWindow(LustreInstanceMaintenancePolicyMaintenanceExclusionWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---

##### `PutWeeklyMaintenanceWindows` <a name="PutWeeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows"></a>

```csharp
private void PutWeeklyMaintenanceWindows(LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---

##### `ResetMaintenanceExclusionWindow` <a name="ResetMaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resetMaintenanceExclusionWindow"></a>

```csharp
private void ResetMaintenanceExclusionWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow">MaintenanceExclusionWindow</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows">WeeklyMaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindowInput">MaintenanceExclusionWindowInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowsInput">WeeklyMaintenanceWindowsInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceExclusionWindow`<sup>Required</sup> <a name="MaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference MaintenanceExclusionWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference</a>

---

##### `WeeklyMaintenanceWindows`<sup>Required</sup> <a name="WeeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows"></a>

```csharp
public LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference WeeklyMaintenanceWindows { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference</a>

---

##### `MaintenanceExclusionWindowInput`<sup>Optional</sup> <a name="MaintenanceExclusionWindowInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindowInput"></a>

```csharp
public LustreInstanceMaintenancePolicyMaintenanceExclusionWindow MaintenanceExclusionWindowInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---

##### `WeeklyMaintenanceWindowsInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowsInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowsInput"></a>

```csharp
public LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows WeeklyMaintenanceWindowsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceMaintenancePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

---


### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime"></a>

```csharp
public LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```csharp
public LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime StartTimeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---


### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---


### LustreInstanceTimeoutsOutputReference <a name="LustreInstanceTimeoutsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LustreInstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

---


### LustreInstanceUpcomingMaintenanceScheduleList <a name="LustreInstanceUpcomingMaintenanceScheduleList" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceUpcomingMaintenanceScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get"></a>

```csharp
private LustreInstanceUpcomingMaintenanceScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### LustreInstanceUpcomingMaintenanceScheduleOutputReference <a name="LustreInstanceUpcomingMaintenanceScheduleOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LustreInstanceUpcomingMaintenanceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule">LustreInstanceUpcomingMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue"></a>

```csharp
public LustreInstanceUpcomingMaintenanceSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule">LustreInstanceUpcomingMaintenanceSchedule</a>

---




# `discoveryEngineControl` Submodule <a name="`discoveryEngineControl` Submodule" id="@cdktn/provider-google.discoveryEngineControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineControl <a name="DiscoveryEngineControl" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control google_discovery_engine_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControl(Construct Scope, string Id, DiscoveryEngineControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig">DiscoveryEngineControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig">DiscoveryEngineControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction">PutBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction">PutFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction">PutPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction">PutRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction">PutSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetBoostAction">ResetBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetCollectionId">ResetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetFilterAction">ResetFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetPromoteAction">ResetPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetRedirectAction">ResetRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetSynonymsAction">ResetSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetUseCases">ResetUseCases</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBoostAction` <a name="PutBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction"></a>

```csharp
private void PutBoostAction(DiscoveryEngineControlBoostAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions"></a>

```csharp
private void PutConditions(IResolvable|DiscoveryEngineControlConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>[]

---

##### `PutFilterAction` <a name="PutFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction"></a>

```csharp
private void PutFilterAction(DiscoveryEngineControlFilterAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---

##### `PutPromoteAction` <a name="PutPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction"></a>

```csharp
private void PutPromoteAction(DiscoveryEngineControlPromoteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---

##### `PutRedirectAction` <a name="PutRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction"></a>

```csharp
private void PutRedirectAction(DiscoveryEngineControlRedirectAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---

##### `PutSynonymsAction` <a name="PutSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction"></a>

```csharp
private void PutSynonymsAction(DiscoveryEngineControlSynonymsAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineControlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---

##### `ResetBoostAction` <a name="ResetBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetBoostAction"></a>

```csharp
private void ResetBoostAction()
```

##### `ResetCollectionId` <a name="ResetCollectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetCollectionId"></a>

```csharp
private void ResetCollectionId()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetFilterAction` <a name="ResetFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetFilterAction"></a>

```csharp
private void ResetFilterAction()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPromoteAction` <a name="ResetPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetPromoteAction"></a>

```csharp
private void ResetPromoteAction()
```

##### `ResetRedirectAction` <a name="ResetRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetRedirectAction"></a>

```csharp
private void ResetRedirectAction()
```

##### `ResetSynonymsAction` <a name="ResetSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetSynonymsAction"></a>

```csharp
private void ResetSynonymsAction()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseCases` <a name="ResetUseCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetUseCases"></a>

```csharp
private void ResetUseCases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DiscoveryEngineControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostAction">BoostAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference">DiscoveryEngineControlBoostActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList">DiscoveryEngineControlConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterAction">FilterAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference">DiscoveryEngineControlFilterActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteAction">PromoteAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference">DiscoveryEngineControlPromoteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectAction">RedirectAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference">DiscoveryEngineControlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsAction">SynonymsAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference">DiscoveryEngineControlSynonymsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference">DiscoveryEngineControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostActionInput">BoostActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlIdInput">ControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineIdInput">EngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterActionInput">FilterActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteActionInput">PromoteActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectActionInput">RedirectActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionTypeInput">SolutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsActionInput">SynonymsActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCasesInput">UseCasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlId">ControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineId">EngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionType">SolutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCases">UseCases</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BoostAction`<sup>Required</sup> <a name="BoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostAction"></a>

```csharp
public DiscoveryEngineControlBoostActionOutputReference BoostAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference">DiscoveryEngineControlBoostActionOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditions"></a>

```csharp
public DiscoveryEngineControlConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList">DiscoveryEngineControlConditionsList</a>

---

##### `FilterAction`<sup>Required</sup> <a name="FilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterAction"></a>

```csharp
public DiscoveryEngineControlFilterActionOutputReference FilterAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference">DiscoveryEngineControlFilterActionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PromoteAction`<sup>Required</sup> <a name="PromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteAction"></a>

```csharp
public DiscoveryEngineControlPromoteActionOutputReference PromoteAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference">DiscoveryEngineControlPromoteActionOutputReference</a>

---

##### `RedirectAction`<sup>Required</sup> <a name="RedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectAction"></a>

```csharp
public DiscoveryEngineControlRedirectActionOutputReference RedirectAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference">DiscoveryEngineControlRedirectActionOutputReference</a>

---

##### `SynonymsAction`<sup>Required</sup> <a name="SynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsAction"></a>

```csharp
public DiscoveryEngineControlSynonymsActionOutputReference SynonymsAction { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference">DiscoveryEngineControlSynonymsActionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeouts"></a>

```csharp
public DiscoveryEngineControlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference">DiscoveryEngineControlTimeoutsOutputReference</a>

---

##### `BoostActionInput`<sup>Optional</sup> <a name="BoostActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostActionInput"></a>

```csharp
public DiscoveryEngineControlBoostAction BoostActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditionsInput"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>[]

---

##### `ControlIdInput`<sup>Optional</sup> <a name="ControlIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlIdInput"></a>

```csharp
public string ControlIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineIdInput"></a>

```csharp
public string EngineIdInput { get; }
```

- *Type:* string

---

##### `FilterActionInput`<sup>Optional</sup> <a name="FilterActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterActionInput"></a>

```csharp
public DiscoveryEngineControlFilterAction FilterActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PromoteActionInput`<sup>Optional</sup> <a name="PromoteActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteActionInput"></a>

```csharp
public DiscoveryEngineControlPromoteAction PromoteActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---

##### `RedirectActionInput`<sup>Optional</sup> <a name="RedirectActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectActionInput"></a>

```csharp
public DiscoveryEngineControlRedirectAction RedirectActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---

##### `SolutionTypeInput`<sup>Optional</sup> <a name="SolutionTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionTypeInput"></a>

```csharp
public string SolutionTypeInput { get; }
```

- *Type:* string

---

##### `SynonymsActionInput`<sup>Optional</sup> <a name="SynonymsActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsActionInput"></a>

```csharp
public DiscoveryEngineControlSynonymsAction SynonymsActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeoutsInput"></a>

```csharp
public IResolvable|DiscoveryEngineControlTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---

##### `UseCasesInput`<sup>Optional</sup> <a name="UseCasesInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCasesInput"></a>

```csharp
public string[] UseCasesInput { get; }
```

- *Type:* string[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlId"></a>

```csharp
public string ControlId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineId"></a>

```csharp
public string EngineId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SolutionType`<sup>Required</sup> <a name="SolutionType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionType"></a>

```csharp
public string SolutionType { get; }
```

- *Type:* string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCases"></a>

```csharp
public string[] UseCases { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineControlBoostAction <a name="DiscoveryEngineControlBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlBoostAction {
    string DataStore,
    string Filter,
    double FixedBoost = null,
    DiscoveryEngineControlBoostActionInterpolationBoostSpec InterpolationBoostSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.dataStore">DataStore</a></code> | <code>string</code> | The data store to boost. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.filter">Filter</a></code> | <code>string</code> | The filter to apply to the search results. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.fixedBoost">FixedBoost</a></code> | <code>double</code> | The fixed boost value to apply to the search results. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.interpolationBoostSpec">InterpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | interpolation_boost_spec block. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.dataStore"></a>

```csharp
public string DataStore { get; set; }
```

- *Type:* string

The data store to boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

##### `FixedBoost`<sup>Optional</sup> <a name="FixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.fixedBoost"></a>

```csharp
public double FixedBoost { get; set; }
```

- *Type:* double

The fixed boost value to apply to the search results.

Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#fixed_boost DiscoveryEngineControl#fixed_boost}

---

##### `InterpolationBoostSpec`<sup>Optional</sup> <a name="InterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.interpolationBoostSpec"></a>

```csharp
public DiscoveryEngineControlBoostActionInterpolationBoostSpec InterpolationBoostSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

interpolation_boost_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#interpolation_boost_spec DiscoveryEngineControl#interpolation_boost_spec}

---

### DiscoveryEngineControlBoostActionInterpolationBoostSpec <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlBoostActionInterpolationBoostSpec {
    string AttributeType = null,
    DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint ControlPoint = null,
    string FieldName = null,
    string InterpolationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType">AttributeType</a></code> | <code>string</code> | The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint">ControlPoint</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | control_point block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName">FieldName</a></code> | <code>string</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType">InterpolationType</a></code> | <code>string</code> | The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"]. |

---

##### `AttributeType`<sup>Optional</sup> <a name="AttributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType"></a>

```csharp
public string AttributeType { get; set; }
```

- *Type:* string

The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#attribute_type DiscoveryEngineControl#attribute_type}

---

##### `ControlPoint`<sup>Optional</sup> <a name="ControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint"></a>

```csharp
public DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint ControlPoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

control_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#control_point DiscoveryEngineControl#control_point}

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#field_name DiscoveryEngineControl#field_name}

---

##### `InterpolationType`<sup>Optional</sup> <a name="InterpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType"></a>

```csharp
public string InterpolationType { get; set; }
```

- *Type:* string

The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#interpolation_type DiscoveryEngineControl#interpolation_type}

---

### DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint {
    string AttributeValue = null,
    double BoostAmount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The attribute value of the control point. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount">BoostAmount</a></code> | <code>double</code> | The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above. |

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The attribute value of the control point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#attribute_value DiscoveryEngineControl#attribute_value}

---

##### `BoostAmount`<sup>Optional</sup> <a name="BoostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount"></a>

```csharp
public double BoostAmount { get; set; }
```

- *Type:* double

The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#boost_amount DiscoveryEngineControl#boost_amount}

---

### DiscoveryEngineControlConditions <a name="DiscoveryEngineControlConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditions {
    IResolvable|DiscoveryEngineControlConditionsActiveTimeRange[] ActiveTimeRange = null,
    string QueryRegex = null,
    IResolvable|DiscoveryEngineControlConditionsQueryTerms[] QueryTerms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.activeTimeRange">ActiveTimeRange</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | active_time_range block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryRegex">QueryRegex</a></code> | <code>string</code> | The regular expression that the query must match for this condition to be met. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryTerms">QueryTerms</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>[]</code> | query_terms block. |

---

##### `ActiveTimeRange`<sup>Optional</sup> <a name="ActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.activeTimeRange"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditionsActiveTimeRange[] ActiveTimeRange { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>[]

active_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#active_time_range DiscoveryEngineControl#active_time_range}

---

##### `QueryRegex`<sup>Optional</sup> <a name="QueryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryRegex"></a>

```csharp
public string QueryRegex { get; set; }
```

- *Type:* string

The regular expression that the query must match for this condition to be met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#query_regex DiscoveryEngineControl#query_regex}

---

##### `QueryTerms`<sup>Optional</sup> <a name="QueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryTerms"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditionsQueryTerms[] QueryTerms { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>[]

query_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#query_terms DiscoveryEngineControl#query_terms}

---

### DiscoveryEngineControlConditionsActiveTimeRange <a name="DiscoveryEngineControlConditionsActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditionsActiveTimeRange {
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.endTime">EndTime</a></code> | <code>string</code> | The end time of the active time range. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.startTime">StartTime</a></code> | <code>string</code> | The start time of the active time range. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The end time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#end_time DiscoveryEngineControl#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The start time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#start_time DiscoveryEngineControl#start_time}

---

### DiscoveryEngineControlConditionsQueryTerms <a name="DiscoveryEngineControlConditionsQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditionsQueryTerms {
    bool|IResolvable FullMatch = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.fullMatch">FullMatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the query term must be an exact match. Otherwise, the query term can be a partial match. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.value">Value</a></code> | <code>string</code> | The value of the query term. |

---

##### `FullMatch`<sup>Optional</sup> <a name="FullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.fullMatch"></a>

```csharp
public bool|IResolvable FullMatch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the query term must be an exact match. Otherwise, the query term can be a partial match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#full_match DiscoveryEngineControl#full_match}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the query term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#value DiscoveryEngineControl#value}

---

### DiscoveryEngineControlConfig <a name="DiscoveryEngineControlConfig" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ControlId,
    string DisplayName,
    string EngineId,
    string Location,
    string SolutionType,
    DiscoveryEngineControlBoostAction BoostAction = null,
    string CollectionId = null,
    IResolvable|DiscoveryEngineControlConditions[] Conditions = null,
    string DeletionPolicy = null,
    DiscoveryEngineControlFilterAction FilterAction = null,
    string Id = null,
    string Project = null,
    DiscoveryEngineControlPromoteAction PromoteAction = null,
    DiscoveryEngineControlRedirectAction RedirectAction = null,
    DiscoveryEngineControlSynonymsAction SynonymsAction = null,
    DiscoveryEngineControlTimeouts Timeouts = null,
    string[] UseCases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.controlId">ControlId</a></code> | <code>string</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.engineId">EngineId</a></code> | <code>string</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.solutionType">SolutionType</a></code> | <code>string</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.boostAction">BoostAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.filterAction">FilterAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.promoteAction">PromoteAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.redirectAction">RedirectAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.synonymsAction">SynonymsAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.useCases">UseCases</a></code> | <code>string[]</code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.controlId"></a>

```csharp
public string ControlId { get; set; }
```

- *Type:* string

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#control_id DiscoveryEngineControl#control_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#display_name DiscoveryEngineControl#display_name}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.engineId"></a>

```csharp
public string EngineId { get; set; }
```

- *Type:* string

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#engine_id DiscoveryEngineControl#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#location DiscoveryEngineControl#location}

---

##### `SolutionType`<sup>Required</sup> <a name="SolutionType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.solutionType"></a>

```csharp
public string SolutionType { get; set; }
```

- *Type:* string

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#solution_type DiscoveryEngineControl#solution_type}

---

##### `BoostAction`<sup>Optional</sup> <a name="BoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.boostAction"></a>

```csharp
public DiscoveryEngineControlBoostAction BoostAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#boost_action DiscoveryEngineControl#boost_action}

---

##### `CollectionId`<sup>Optional</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#collection_id DiscoveryEngineControl#collection_id}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.conditions"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#conditions DiscoveryEngineControl#conditions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#deletion_policy DiscoveryEngineControl#deletion_policy}

---

##### `FilterAction`<sup>Optional</sup> <a name="FilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.filterAction"></a>

```csharp
public DiscoveryEngineControlFilterAction FilterAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#filter_action DiscoveryEngineControl#filter_action}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}.

---

##### `PromoteAction`<sup>Optional</sup> <a name="PromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.promoteAction"></a>

```csharp
public DiscoveryEngineControlPromoteAction PromoteAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#promote_action DiscoveryEngineControl#promote_action}

---

##### `RedirectAction`<sup>Optional</sup> <a name="RedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.redirectAction"></a>

```csharp
public DiscoveryEngineControlRedirectAction RedirectAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#redirect_action DiscoveryEngineControl#redirect_action}

---

##### `SynonymsAction`<sup>Optional</sup> <a name="SynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.synonymsAction"></a>

```csharp
public DiscoveryEngineControlSynonymsAction SynonymsAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#synonyms_action DiscoveryEngineControl#synonyms_action}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineControlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#timeouts DiscoveryEngineControl#timeouts}

---

##### `UseCases`<sup>Optional</sup> <a name="UseCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.useCases"></a>

```csharp
public string[] UseCases { get; set; }
```

- *Type:* string[]

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#use_cases DiscoveryEngineControl#use_cases}

---

### DiscoveryEngineControlFilterAction <a name="DiscoveryEngineControlFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlFilterAction {
    string DataStore,
    string Filter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.dataStore">DataStore</a></code> | <code>string</code> | The data store to filter. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.filter">Filter</a></code> | <code>string</code> | The filter to apply to the search results. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.dataStore"></a>

```csharp
public string DataStore { get; set; }
```

- *Type:* string

The data store to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

### DiscoveryEngineControlPromoteAction <a name="DiscoveryEngineControlPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlPromoteAction {
    string DataStore,
    DiscoveryEngineControlPromoteActionSearchLinkPromotion SearchLinkPromotion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.dataStore">DataStore</a></code> | <code>string</code> | The data store to promote. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.searchLinkPromotion">SearchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | search_link_promotion block. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.dataStore"></a>

```csharp
public string DataStore { get; set; }
```

- *Type:* string

The data store to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `SearchLinkPromotion`<sup>Required</sup> <a name="SearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.searchLinkPromotion"></a>

```csharp
public DiscoveryEngineControlPromoteActionSearchLinkPromotion SearchLinkPromotion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

search_link_promotion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#search_link_promotion DiscoveryEngineControl#search_link_promotion}

---

### DiscoveryEngineControlPromoteActionSearchLinkPromotion <a name="DiscoveryEngineControlPromoteActionSearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlPromoteActionSearchLinkPromotion {
    string Title,
    string Description = null,
    string Document = null,
    bool|IResolvable Enabled = null,
    string ImageUri = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title">Title</a></code> | <code>string</code> | The title of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description">Description</a></code> | <code>string</code> | The description of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document">Document</a></code> | <code>string</code> | The document to promote. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Return promotions for basic site search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri">ImageUri</a></code> | <code>string</code> | The image URI of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri">Uri</a></code> | <code>string</code> | The URI to promote. |

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#title DiscoveryEngineControl#title}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#description DiscoveryEngineControl#description}

---

##### `Document`<sup>Optional</sup> <a name="Document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document"></a>

```csharp
public string Document { get; set; }
```

- *Type:* string

The document to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#document DiscoveryEngineControl#document}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Return promotions for basic site search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#enabled DiscoveryEngineControl#enabled}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

The image URI of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#image_uri DiscoveryEngineControl#image_uri}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#uri DiscoveryEngineControl#uri}

---

### DiscoveryEngineControlRedirectAction <a name="DiscoveryEngineControlRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlRedirectAction {
    string RedirectUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.property.redirectUri">RedirectUri</a></code> | <code>string</code> | The URI to redirect to. |

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.property.redirectUri"></a>

```csharp
public string RedirectUri { get; set; }
```

- *Type:* string

The URI to redirect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#redirect_uri DiscoveryEngineControl#redirect_uri}

---

### DiscoveryEngineControlSynonymsAction <a name="DiscoveryEngineControlSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlSynonymsAction {
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.property.synonyms">Synonyms</a></code> | <code>string[]</code> | The synonyms to apply to the search results. |

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

The synonyms to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#synonyms DiscoveryEngineControl#synonyms}

---

### DiscoveryEngineControlTimeouts <a name="DiscoveryEngineControlTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount">ResetBoostAmount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetBoostAmount` <a name="ResetBoostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount"></a>

```csharp
private void ResetBoostAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput">BoostAmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount">BoostAmount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `BoostAmountInput`<sup>Optional</sup> <a name="BoostAmountInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput"></a>

```csharp
public double BoostAmountInput { get; }
```

- *Type:* double

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `BoostAmount`<sup>Required</sup> <a name="BoostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount"></a>

```csharp
public double BoostAmount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---


### DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint">PutControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType">ResetAttributeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint">ResetControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType">ResetInterpolationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPoint` <a name="PutControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint"></a>

```csharp
private void PutControlPoint(DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `ResetAttributeType` <a name="ResetAttributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType"></a>

```csharp
private void ResetAttributeType()
```

##### `ResetControlPoint` <a name="ResetControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint"></a>

```csharp
private void ResetControlPoint()
```

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetInterpolationType` <a name="ResetInterpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType"></a>

```csharp
private void ResetInterpolationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint">ControlPoint</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput">AttributeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput">ControlPointInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput">InterpolationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType">AttributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType">InterpolationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPoint`<sup>Required</sup> <a name="ControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint"></a>

```csharp
public DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference ControlPoint { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a>

---

##### `AttributeTypeInput`<sup>Optional</sup> <a name="AttributeTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput"></a>

```csharp
public string AttributeTypeInput { get; }
```

- *Type:* string

---

##### `ControlPointInput`<sup>Optional</sup> <a name="ControlPointInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput"></a>

```csharp
public DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint ControlPointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `InterpolationTypeInput`<sup>Optional</sup> <a name="InterpolationTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput"></a>

```csharp
public string InterpolationTypeInput { get; }
```

- *Type:* string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType"></a>

```csharp
public string AttributeType { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InterpolationType`<sup>Required</sup> <a name="InterpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType"></a>

```csharp
public string InterpolationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineControlBoostActionInterpolationBoostSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---


### DiscoveryEngineControlBoostActionOutputReference <a name="DiscoveryEngineControlBoostActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlBoostActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec">PutInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetFixedBoost">ResetFixedBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec">ResetInterpolationBoostSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterpolationBoostSpec` <a name="PutInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec"></a>

```csharp
private void PutInterpolationBoostSpec(DiscoveryEngineControlBoostActionInterpolationBoostSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `ResetFixedBoost` <a name="ResetFixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetFixedBoost"></a>

```csharp
private void ResetFixedBoost()
```

##### `ResetInterpolationBoostSpec` <a name="ResetInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec"></a>

```csharp
private void ResetInterpolationBoostSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec">InterpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput">FixedBoostInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput">InterpolationBoostSpecInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoost">FixedBoost</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterpolationBoostSpec`<sup>Required</sup> <a name="InterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec"></a>

```csharp
public DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference InterpolationBoostSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput"></a>

```csharp
public string DataStoreInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FixedBoostInput`<sup>Optional</sup> <a name="FixedBoostInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput"></a>

```csharp
public double FixedBoostInput { get; }
```

- *Type:* double

---

##### `InterpolationBoostSpecInput`<sup>Optional</sup> <a name="InterpolationBoostSpecInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput"></a>

```csharp
public DiscoveryEngineControlBoostActionInterpolationBoostSpec InterpolationBoostSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `FixedBoost`<sup>Required</sup> <a name="FixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoost"></a>

```csharp
public double FixedBoost { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineControlBoostAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---


### DiscoveryEngineControlConditionsActiveTimeRangeList <a name="DiscoveryEngineControlConditionsActiveTimeRangeList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditionsActiveTimeRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get"></a>

```csharp
private DiscoveryEngineControlConditionsActiveTimeRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditionsActiveTimeRange[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>[]

---


### DiscoveryEngineControlConditionsActiveTimeRangeOutputReference <a name="DiscoveryEngineControlConditionsActiveTimeRangeOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditionsActiveTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditionsActiveTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>

---


### DiscoveryEngineControlConditionsList <a name="DiscoveryEngineControlConditionsList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get"></a>

```csharp
private DiscoveryEngineControlConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>[]

---


### DiscoveryEngineControlConditionsOutputReference <a name="DiscoveryEngineControlConditionsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange">PutActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms">PutQueryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange">ResetActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryRegex">ResetQueryRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryTerms">ResetQueryTerms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveTimeRange` <a name="PutActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange"></a>

```csharp
private void PutActiveTimeRange(IResolvable|DiscoveryEngineControlConditionsActiveTimeRange[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>[]

---

##### `PutQueryTerms` <a name="PutQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms"></a>

```csharp
private void PutQueryTerms(IResolvable|DiscoveryEngineControlConditionsQueryTerms[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>[]

---

##### `ResetActiveTimeRange` <a name="ResetActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange"></a>

```csharp
private void ResetActiveTimeRange()
```

##### `ResetQueryRegex` <a name="ResetQueryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryRegex"></a>

```csharp
private void ResetQueryRegex()
```

##### `ResetQueryTerms` <a name="ResetQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryTerms"></a>

```csharp
private void ResetQueryTerms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRange">ActiveTimeRange</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList">DiscoveryEngineControlConditionsActiveTimeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTerms">QueryTerms</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList">DiscoveryEngineControlConditionsQueryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput">ActiveTimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegexInput">QueryRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTermsInput">QueryTermsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegex">QueryRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveTimeRange`<sup>Required</sup> <a name="ActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRange"></a>

```csharp
public DiscoveryEngineControlConditionsActiveTimeRangeList ActiveTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList">DiscoveryEngineControlConditionsActiveTimeRangeList</a>

---

##### `QueryTerms`<sup>Required</sup> <a name="QueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTerms"></a>

```csharp
public DiscoveryEngineControlConditionsQueryTermsList QueryTerms { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList">DiscoveryEngineControlConditionsQueryTermsList</a>

---

##### `ActiveTimeRangeInput`<sup>Optional</sup> <a name="ActiveTimeRangeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditionsActiveTimeRange[] ActiveTimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>[]

---

##### `QueryRegexInput`<sup>Optional</sup> <a name="QueryRegexInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegexInput"></a>

```csharp
public string QueryRegexInput { get; }
```

- *Type:* string

---

##### `QueryTermsInput`<sup>Optional</sup> <a name="QueryTermsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTermsInput"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditionsQueryTerms[] QueryTermsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>[]

---

##### `QueryRegex`<sup>Required</sup> <a name="QueryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegex"></a>

```csharp
public string QueryRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>

---


### DiscoveryEngineControlConditionsQueryTermsList <a name="DiscoveryEngineControlConditionsQueryTermsList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditionsQueryTermsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get"></a>

```csharp
private DiscoveryEngineControlConditionsQueryTermsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditionsQueryTerms[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>[]

---


### DiscoveryEngineControlConditionsQueryTermsOutputReference <a name="DiscoveryEngineControlConditionsQueryTermsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlConditionsQueryTermsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch">ResetFullMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullMatch` <a name="ResetFullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch"></a>

```csharp
private void ResetFullMatch()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput">FullMatchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch">FullMatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FullMatchInput`<sup>Optional</sup> <a name="FullMatchInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput"></a>

```csharp
public bool|IResolvable FullMatchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `FullMatch`<sup>Required</sup> <a name="FullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch"></a>

```csharp
public bool|IResolvable FullMatch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineControlConditionsQueryTerms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>

---


### DiscoveryEngineControlFilterActionOutputReference <a name="DiscoveryEngineControlFilterActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlFilterActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput"></a>

```csharp
public string DataStoreInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineControlFilterAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---


### DiscoveryEngineControlPromoteActionOutputReference <a name="DiscoveryEngineControlPromoteActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlPromoteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion">PutSearchLinkPromotion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSearchLinkPromotion` <a name="PutSearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion"></a>

```csharp
private void PutSearchLinkPromotion(DiscoveryEngineControlPromoteActionSearchLinkPromotion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion">SearchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput">SearchLinkPromotionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SearchLinkPromotion`<sup>Required</sup> <a name="SearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion"></a>

```csharp
public DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference SearchLinkPromotion { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput"></a>

```csharp
public string DataStoreInput { get; }
```

- *Type:* string

---

##### `SearchLinkPromotionInput`<sup>Optional</sup> <a name="SearchLinkPromotionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput"></a>

```csharp
public DiscoveryEngineControlPromoteActionSearchLinkPromotion SearchLinkPromotionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineControlPromoteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---


### DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference <a name="DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument">ResetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocument` <a name="ResetDocument" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument"></a>

```csharp
private void ResetDocument()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri"></a>

```csharp
private void ResetImageUri()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput">DocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document">Document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DocumentInput`<sup>Optional</sup> <a name="DocumentInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput"></a>

```csharp
public string DocumentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document"></a>

```csharp
public string Document { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineControlPromoteActionSearchLinkPromotion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


### DiscoveryEngineControlRedirectActionOutputReference <a name="DiscoveryEngineControlRedirectActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlRedirectActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput"></a>

```csharp
public string RedirectUriInput { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineControlRedirectAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---


### DiscoveryEngineControlSynonymsActionOutputReference <a name="DiscoveryEngineControlSynonymsActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlSynonymsActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineControlSynonymsAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---


### DiscoveryEngineControlTimeoutsOutputReference <a name="DiscoveryEngineControlTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineControlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineControlTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---




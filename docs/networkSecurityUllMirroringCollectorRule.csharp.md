# `networkSecurityUllMirroringCollectorRule` Submodule <a name="`networkSecurityUllMirroringCollectorRule` Submodule" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityUllMirroringCollectorRule <a name="NetworkSecurityUllMirroringCollectorRule" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule google_network_security_ull_mirroring_collector_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityUllMirroringCollectorRule(Construct Scope, string Id, NetworkSecurityUllMirroringCollectorRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig">NetworkSecurityUllMirroringCollectorRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig">NetworkSecurityUllMirroringCollectorRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatch` <a name="PutMatch" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch"></a>

```csharp
private void PutMatch(NetworkSecurityUllMirroringCollectorRuleMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityUllMirroringCollectorRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkSecurityUllMirroringCollectorRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkSecurityUllMirroringCollectorRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkSecurityUllMirroringCollectorRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

NetworkSecurityUllMirroringCollectorRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityUllMirroringCollectorRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityUllMirroringCollectorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityUllMirroringCollectorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference">NetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.reconciling">Reconciling</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput">UllMirroringCollectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput">UllMirroringCollectorRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector">UllMirroringCollector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId">UllMirroringCollectorRuleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.match"></a>

```csharp
public NetworkSecurityUllMirroringCollectorRuleMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference">NetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeouts"></a>

```csharp
public NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.matchInput"></a>

```csharp
public NetworkSecurityUllMirroringCollectorRuleMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkSecurityUllMirroringCollectorRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `UllMirroringCollectorInput`<sup>Optional</sup> <a name="UllMirroringCollectorInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput"></a>

```csharp
public string UllMirroringCollectorInput { get; }
```

- *Type:* string

---

##### `UllMirroringCollectorRuleIdInput`<sup>Optional</sup> <a name="UllMirroringCollectorRuleIdInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput"></a>

```csharp
public string UllMirroringCollectorRuleIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `UllMirroringCollector`<sup>Required</sup> <a name="UllMirroringCollector" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector"></a>

```csharp
public string UllMirroringCollector { get; }
```

- *Type:* string

---

##### `UllMirroringCollectorRuleId`<sup>Required</sup> <a name="UllMirroringCollectorRuleId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId"></a>

```csharp
public string UllMirroringCollectorRuleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityUllMirroringCollectorRuleConfig <a name="NetworkSecurityUllMirroringCollectorRuleConfig" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityUllMirroringCollectorRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    NetworkSecurityUllMirroringCollectorRuleMatch Match,
    string UllMirroringCollector,
    string UllMirroringCollectorRuleId,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    NetworkSecurityUllMirroringCollectorRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector">UllMirroringCollector</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId">UllMirroringCollectorRuleId</a></code> | <code>string</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#id NetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#project NetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#location NetworkSecurityUllMirroringCollectorRule#location}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.match"></a>

```csharp
public NetworkSecurityUllMirroringCollectorRuleMatch Match { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#match NetworkSecurityUllMirroringCollectorRule#match}

---

##### `UllMirroringCollector`<sup>Required</sup> <a name="UllMirroringCollector" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector"></a>

```csharp
public string UllMirroringCollector { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ull_mirroring_collector NetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `UllMirroringCollectorRuleId`<sup>Required</sup> <a name="UllMirroringCollectorRuleId" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId"></a>

```csharp
public string UllMirroringCollectorRuleId { get; set; }
```

- *Type:* string

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id NetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#deletion_policy NetworkSecurityUllMirroringCollectorRule#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#id NetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#labels NetworkSecurityUllMirroringCollectorRule#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#project NetworkSecurityUllMirroringCollectorRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts"></a>

```csharp
public NetworkSecurityUllMirroringCollectorRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#timeouts NetworkSecurityUllMirroringCollectorRule#timeouts}

---

### NetworkSecurityUllMirroringCollectorRuleMatch <a name="NetworkSecurityUllMirroringCollectorRuleMatch" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityUllMirroringCollectorRuleMatch {
    string Direction = null,
    string[] DstIpRanges = null,
    string[] IpProtocols = null,
    string[] SrcIpRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.direction">Direction</a></code> | <code>string</code> | Direction of traffic to match. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges">DstIpRanges</a></code> | <code>string[]</code> | Destination IP ranges to match. When unset, matches any destination IP range. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | Source IP ranges to match. When unset, matches any source IP range. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#direction NetworkSecurityUllMirroringCollectorRule#direction}

---

##### `DstIpRanges`<sup>Optional</sup> <a name="DstIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges"></a>

```csharp
public string[] DstIpRanges { get; set; }
```

- *Type:* string[]

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#dst_ip_ranges NetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; set; }
```

- *Type:* string[]

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ip_protocols NetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; set; }
```

- *Type:* string[]

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#src_ip_ranges NetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

### NetworkSecurityUllMirroringCollectorRuleTimeouts <a name="NetworkSecurityUllMirroringCollectorRuleTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityUllMirroringCollectorRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#create NetworkSecurityUllMirroringCollectorRule#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#delete NetworkSecurityUllMirroringCollectorRule#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#update NetworkSecurityUllMirroringCollectorRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#create NetworkSecurityUllMirroringCollectorRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#delete NetworkSecurityUllMirroringCollectorRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#update NetworkSecurityUllMirroringCollectorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityUllMirroringCollectorRuleMatchOutputReference <a name="NetworkSecurityUllMirroringCollectorRuleMatchOutputReference" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityUllMirroringCollectorRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges">ResetDstIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetDstIpRanges` <a name="ResetDstIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges"></a>

```csharp
private void ResetDstIpRanges()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols"></a>

```csharp
private void ResetIpProtocols()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges"></a>

```csharp
private void ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput">DstIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges">DstIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DstIpRangesInput`<sup>Optional</sup> <a name="DstIpRangesInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput"></a>

```csharp
public string[] DstIpRangesInput { get; }
```

- *Type:* string[]

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput"></a>

```csharp
public string[] IpProtocolsInput { get; }
```

- *Type:* string[]

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput"></a>

```csharp
public string[] SrcIpRangesInput { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `DstIpRanges`<sup>Required</sup> <a name="DstIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges"></a>

```csharp
public string[] DstIpRanges { get; }
```

- *Type:* string[]

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; }
```

- *Type:* string[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityUllMirroringCollectorRuleMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

---


### NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference <a name="NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkSecurityUllMirroringCollectorRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---




# `computeFirewall` Submodule <a name="`computeFirewall` Submodule" id="@cdktn/provider-google.computeFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewall <a name="ComputeFirewall" id="@cdktn/provider-google.computeFirewall.ComputeFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall google_compute_firewall}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewall(Construct Scope, string Id, ComputeFirewallConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig">ComputeFirewallConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig">ComputeFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDestinationRanges">ResetDestinationRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetSourceRanges">ResetSourceRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetSourceServiceAccounts">ResetSourceServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetSourceTags">ResetSourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetTargetTags">ResetTargetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllow` <a name="PutAllow" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putAllow"></a>

```csharp
private void PutAllow(IResolvable|ComputeFirewallAllow[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putAllow.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>[]

---

##### `PutDeny` <a name="PutDeny" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putDeny"></a>

```csharp
private void PutDeny(IResolvable|ComputeFirewallDeny[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putDeny.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>[]

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putLogConfig"></a>

```csharp
private void PutLogConfig(ComputeFirewallLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putParams"></a>

```csharp
private void PutParams(ComputeFirewallParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParams">ComputeFirewallParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeFirewallTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDeny"></a>

```csharp
private void ResetDeny()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationRanges` <a name="ResetDestinationRanges" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDestinationRanges"></a>

```csharp
private void ResetDestinationRanges()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSourceRanges` <a name="ResetSourceRanges" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetSourceRanges"></a>

```csharp
private void ResetSourceRanges()
```

##### `ResetSourceServiceAccounts` <a name="ResetSourceServiceAccounts" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetSourceServiceAccounts"></a>

```csharp
private void ResetSourceServiceAccounts()
```

##### `ResetSourceTags` <a name="ResetSourceTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetSourceTags"></a>

```csharp
private void ResetSourceTags()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetTargetServiceAccounts"></a>

```csharp
private void ResetTargetServiceAccounts()
```

##### `ResetTargetTags` <a name="ResetTargetTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetTargetTags"></a>

```csharp
private void ResetTargetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeFirewall resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeFirewall.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeFirewall.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeFirewall.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeFirewall.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeFirewall resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeFirewall to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.allow">Allow</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList">ComputeFirewallAllowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.deny">Deny</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList">ComputeFirewallDenyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference">ComputeFirewallLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference">ComputeFirewallParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference">ComputeFirewallTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.allowInput">AllowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.denyInput">DenyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.destinationRangesInput">DestinationRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParams">ComputeFirewallParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceRangesInput">SourceRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccountsInput">SourceServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceTagsInput">SourceTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.targetTagsInput">TargetTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.destinationRanges">DestinationRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.enableLogging">EnableLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceRanges">SourceRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccounts">SourceServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceTags">SourceTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.targetTags">TargetTags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.allow"></a>

```csharp
public ComputeFirewallAllowList Allow { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList">ComputeFirewallAllowList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.deny"></a>

```csharp
public ComputeFirewallDenyList Deny { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList">ComputeFirewallDenyList</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.logConfig"></a>

```csharp
public ComputeFirewallLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference">ComputeFirewallLogConfigOutputReference</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.params"></a>

```csharp
public ComputeFirewallParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference">ComputeFirewallParamsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.timeouts"></a>

```csharp
public ComputeFirewallTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference">ComputeFirewallTimeoutsOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.allowInput"></a>

```csharp
public IResolvable|ComputeFirewallAllow[] AllowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.denyInput"></a>

```csharp
public IResolvable|ComputeFirewallDeny[] DenyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationRangesInput`<sup>Optional</sup> <a name="DestinationRangesInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.destinationRangesInput"></a>

```csharp
public string[] DestinationRangesInput { get; }
```

- *Type:* string[]

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.enableLoggingInput"></a>

```csharp
public bool|IResolvable EnableLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.logConfigInput"></a>

```csharp
public ComputeFirewallLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.paramsInput"></a>

```csharp
public ComputeFirewallParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParams">ComputeFirewallParams</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SourceRangesInput`<sup>Optional</sup> <a name="SourceRangesInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceRangesInput"></a>

```csharp
public string[] SourceRangesInput { get; }
```

- *Type:* string[]

---

##### `SourceServiceAccountsInput`<sup>Optional</sup> <a name="SourceServiceAccountsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccountsInput"></a>

```csharp
public string[] SourceServiceAccountsInput { get; }
```

- *Type:* string[]

---

##### `SourceTagsInput`<sup>Optional</sup> <a name="SourceTagsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceTagsInput"></a>

```csharp
public string[] SourceTagsInput { get; }
```

- *Type:* string[]

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccountsInput"></a>

```csharp
public string[] TargetServiceAccountsInput { get; }
```

- *Type:* string[]

---

##### `TargetTagsInput`<sup>Optional</sup> <a name="TargetTagsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.targetTagsInput"></a>

```csharp
public string[] TargetTagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.timeoutsInput"></a>

```csharp
public IResolvable|ComputeFirewallTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationRanges`<sup>Required</sup> <a name="DestinationRanges" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.destinationRanges"></a>

```csharp
public string[] DestinationRanges { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.enableLogging"></a>

```csharp
public bool|IResolvable EnableLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SourceRanges`<sup>Required</sup> <a name="SourceRanges" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceRanges"></a>

```csharp
public string[] SourceRanges { get; }
```

- *Type:* string[]

---

##### `SourceServiceAccounts`<sup>Required</sup> <a name="SourceServiceAccounts" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccounts"></a>

```csharp
public string[] SourceServiceAccounts { get; }
```

- *Type:* string[]

---

##### `SourceTags`<sup>Required</sup> <a name="SourceTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.sourceTags"></a>

```csharp
public string[] SourceTags { get; }
```

- *Type:* string[]

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; }
```

- *Type:* string[]

---

##### `TargetTags`<sup>Required</sup> <a name="TargetTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.targetTags"></a>

```csharp
public string[] TargetTags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewall.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeFirewall.ComputeFirewall.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallAllow <a name="ComputeFirewallAllow" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallAllow {
    string Protocol,
    string[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow.property.protocol">Protocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow.property.ports">Ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllow.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#protocol ComputeFirewall#protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllow.property.ports"></a>

```csharp
public string[] Ports { get; set; }
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: [22], [80, 443], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#ports ComputeFirewall#ports}

---

### ComputeFirewallConfig <a name="ComputeFirewallConfig" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Network,
    IResolvable|ComputeFirewallAllow[] Allow = null,
    string DeletionPolicy = null,
    IResolvable|ComputeFirewallDeny[] Deny = null,
    string Description = null,
    string[] DestinationRanges = null,
    string Direction = null,
    bool|IResolvable Disabled = null,
    bool|IResolvable EnableLogging = null,
    string Id = null,
    ComputeFirewallLogConfig LogConfig = null,
    ComputeFirewallParams Params = null,
    double Priority = null,
    string Project = null,
    string[] SourceRanges = null,
    string[] SourceServiceAccounts = null,
    string[] SourceTags = null,
    string[] TargetServiceAccounts = null,
    string[] TargetTags = null,
    ComputeFirewallTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.network">Network</a></code> | <code>string</code> | The name or self_link of the network to attach this firewall to. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.allow">Allow</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>[]</code> | allow block. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.deny">Deny</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>[]</code> | deny block. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.destinationRanges">DestinationRanges</a></code> | <code>string[]</code> | If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.direction">Direction</a></code> | <code>string</code> | Direction of traffic to which this firewall applies; |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.enableLogging">EnableLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This field denotes whether to enable logging for a particular firewall rule. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#id ComputeFirewall#id}. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParams">ComputeFirewallParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.priority">Priority</a></code> | <code>double</code> | Priority for this rule. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#project ComputeFirewall#project}. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceRanges">SourceRanges</a></code> | <code>string[]</code> | If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceServiceAccounts">SourceServiceAccounts</a></code> | <code>string[]</code> | If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceTags">SourceTags</a></code> | <code>string[]</code> | If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.targetTags">TargetTags</a></code> | <code>string[]</code> | A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#name ComputeFirewall#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name or self_link of the network to attach this firewall to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#network ComputeFirewall#network}

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.allow"></a>

```csharp
public IResolvable|ComputeFirewallAllow[] Allow { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>[]

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#allow ComputeFirewall#allow}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#deletion_policy ComputeFirewall#deletion_policy}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.deny"></a>

```csharp
public IResolvable|ComputeFirewallDeny[] Deny { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>[]

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#deny ComputeFirewall#deny}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#description ComputeFirewall#description}

---

##### `DestinationRanges`<sup>Optional</sup> <a name="DestinationRanges" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.destinationRanges"></a>

```csharp
public string[] DestinationRanges { get; set; }
```

- *Type:* string[]

If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges.

These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#destination_ranges ComputeFirewall#destination_ranges}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction of traffic to which this firewall applies;

default is
INGRESS. Note: For INGRESS traffic, one of 'source_ranges',
'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#direction ComputeFirewall#direction}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#disabled ComputeFirewall#disabled}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.enableLogging"></a>

```csharp
public bool|IResolvable EnableLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This field denotes whether to enable logging for a particular firewall rule.

If logging is enabled, logs will be exported to Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#enable_logging ComputeFirewall#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#id ComputeFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.logConfig"></a>

```csharp
public ComputeFirewallLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#log_config ComputeFirewall#log_config}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.params"></a>

```csharp
public ComputeFirewallParams Params { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParams">ComputeFirewallParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#params ComputeFirewall#params}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Priority for this rule.

This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#priority ComputeFirewall#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#project ComputeFirewall#project}.

---

##### `SourceRanges`<sup>Optional</sup> <a name="SourceRanges" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceRanges"></a>

```csharp
public string[] SourceRanges { get; set; }
```

- *Type:* string[]

If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges.

These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#source_ranges ComputeFirewall#source_ranges}

---

##### `SourceServiceAccounts`<sup>Optional</sup> <a name="SourceServiceAccounts" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceServiceAccounts"></a>

```csharp
public string[] SourceServiceAccounts { get; set; }
```

- *Type:* string[]

If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list.

Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#source_service_accounts ComputeFirewall#source_service_accounts}

---

##### `SourceTags`<sup>Optional</sup> <a name="SourceTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceTags"></a>

```csharp
public string[] SourceTags { get; set; }
```

- *Type:* string[]

If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags.

Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#source_tags ComputeFirewall#source_tags}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; set; }
```

- *Type:* string[]

A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[].

targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#target_service_accounts ComputeFirewall#target_service_accounts}

---

##### `TargetTags`<sup>Optional</sup> <a name="TargetTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.targetTags"></a>

```csharp
public string[] TargetTags { get; set; }
```

- *Type:* string[]

A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[].

If no targetTags are specified, the firewall rule applies to all
instances on the specified network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#target_tags ComputeFirewall#target_tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeFirewall.ComputeFirewallConfig.property.timeouts"></a>

```csharp
public ComputeFirewallTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#timeouts ComputeFirewall#timeouts}

---

### ComputeFirewallDeny <a name="ComputeFirewallDeny" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDeny.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallDeny {
    string Protocol,
    string[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny.property.protocol">Protocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny.property.ports">Ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDeny.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#protocol ComputeFirewall#protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDeny.property.ports"></a>

```csharp
public string[] Ports { get; set; }
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: [22], [80, 443], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#ports ComputeFirewall#ports}

---

### ComputeFirewallLogConfig <a name="ComputeFirewallLogConfig" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallLogConfig {
    string Metadata
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig.property.metadata">Metadata</a></code> | <code>string</code> | This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"]. |

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#metadata ComputeFirewall#metadata}

---

### ComputeFirewallParams <a name="ComputeFirewallParams" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags to be bound to the firewall. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags to be bound to the firewall.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456. The field is ignored when empty.
The field is immutable and causes resource replacement when mutated. This field is only
set at create time and modifying this field after creation will trigger recreation.
To apply tags to an existing resource, see the google_tags_tag_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#resource_manager_tags ComputeFirewall#resource_manager_tags}

---

### ComputeFirewallTimeouts <a name="ComputeFirewallTimeouts" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#create ComputeFirewall#create}. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#delete ComputeFirewall#delete}. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#update ComputeFirewall#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#create ComputeFirewall#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#delete ComputeFirewall#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_firewall#update ComputeFirewall#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallAllowList <a name="ComputeFirewallAllowList" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallAllowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.get"></a>

```csharp
private ComputeFirewallAllowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowList.property.internalValue"></a>

```csharp
public IResolvable|ComputeFirewallAllow[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>[]

---


### ComputeFirewallAllowOutputReference <a name="ComputeFirewallAllowOutputReference" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeFirewallAllow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>

---


### ComputeFirewallDenyList <a name="ComputeFirewallDenyList" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallDenyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.get"></a>

```csharp
private ComputeFirewallDenyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyList.property.internalValue"></a>

```csharp
public IResolvable|ComputeFirewallDeny[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>[]

---


### ComputeFirewallDenyOutputReference <a name="ComputeFirewallDenyOutputReference" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallDenyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeFirewallDeny InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>

---


### ComputeFirewallLogConfigOutputReference <a name="ComputeFirewallLogConfigOutputReference" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeFirewallLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---


### ComputeFirewallParamsOutputReference <a name="ComputeFirewallParamsOutputReference" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParams">ComputeFirewallParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeFirewall.ComputeFirewallParamsOutputReference.property.internalValue"></a>

```csharp
public ComputeFirewallParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallParams">ComputeFirewallParams</a>

---


### ComputeFirewallTimeoutsOutputReference <a name="ComputeFirewallTimeoutsOutputReference" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeFirewallTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeFirewallTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

---




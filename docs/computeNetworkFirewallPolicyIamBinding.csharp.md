# `computeNetworkFirewallPolicyIamBinding` Submodule <a name="`computeNetworkFirewallPolicyIamBinding` Submodule" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkFirewallPolicyIamBinding <a name="ComputeNetworkFirewallPolicyIamBinding" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding google_compute_network_firewall_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeNetworkFirewallPolicyIamBinding(Construct Scope, string Id, ComputeNetworkFirewallPolicyIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig">ComputeNetworkFirewallPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig">ComputeNetworkFirewallPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.putCondition"></a>

```csharp
private void PutCondition(ComputeNetworkFirewallPolicyIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeNetworkFirewallPolicyIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeNetworkFirewallPolicyIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeNetworkFirewallPolicyIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ComputeNetworkFirewallPolicyIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetworkFirewallPolicyIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetworkFirewallPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeNetworkFirewallPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference">ComputeNetworkFirewallPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.condition"></a>

```csharp
public ComputeNetworkFirewallPolicyIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference">ComputeNetworkFirewallPolicyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.conditionInput"></a>

```csharp
public ComputeNetworkFirewallPolicyIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkFirewallPolicyIamBindingCondition <a name="ComputeNetworkFirewallPolicyIamBindingCondition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeNetworkFirewallPolicyIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#expression ComputeNetworkFirewallPolicyIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#title ComputeNetworkFirewallPolicyIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#description ComputeNetworkFirewallPolicyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#expression ComputeNetworkFirewallPolicyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#title ComputeNetworkFirewallPolicyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#description ComputeNetworkFirewallPolicyIamBinding#description}.

---

### ComputeNetworkFirewallPolicyIamBindingConfig <a name="ComputeNetworkFirewallPolicyIamBindingConfig" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeNetworkFirewallPolicyIamBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Members,
    string Name,
    string Role,
    ComputeNetworkFirewallPolicyIamBindingCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#members ComputeNetworkFirewallPolicyIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#name ComputeNetworkFirewallPolicyIamBinding#name}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#role ComputeNetworkFirewallPolicyIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#id ComputeNetworkFirewallPolicyIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#project ComputeNetworkFirewallPolicyIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#members ComputeNetworkFirewallPolicyIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#name ComputeNetworkFirewallPolicyIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#role ComputeNetworkFirewallPolicyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.condition"></a>

```csharp
public ComputeNetworkFirewallPolicyIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#condition ComputeNetworkFirewallPolicyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#id ComputeNetworkFirewallPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_network_firewall_policy_iam_binding#project ComputeNetworkFirewallPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkFirewallPolicyIamBindingConditionOutputReference <a name="ComputeNetworkFirewallPolicyIamBindingConditionOutputReference" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ComputeNetworkFirewallPolicyIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public ComputeNetworkFirewallPolicyIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkFirewallPolicyIamBinding.ComputeNetworkFirewallPolicyIamBindingCondition">ComputeNetworkFirewallPolicyIamBindingCondition</a>

---




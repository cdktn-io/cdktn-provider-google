# `iapAgentRegistryEndpointIamMember` Submodule <a name="`iapAgentRegistryEndpointIamMember` Submodule" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAgentRegistryEndpointIamMember <a name="IapAgentRegistryEndpointIamMember" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member google_iap_agent_registry_endpoint_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IapAgentRegistryEndpointIamMember(Construct Scope, string Id, IapAgentRegistryEndpointIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig">IapAgentRegistryEndpointIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig">IapAgentRegistryEndpointIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.putCondition"></a>

```csharp
private void PutCondition(IapAgentRegistryEndpointIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IapAgentRegistryEndpointIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

IapAgentRegistryEndpointIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

IapAgentRegistryEndpointIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

IapAgentRegistryEndpointIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

IapAgentRegistryEndpointIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IapAgentRegistryEndpointIamMember resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IapAgentRegistryEndpointIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IapAgentRegistryEndpointIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IapAgentRegistryEndpointIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference">IapAgentRegistryEndpointIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.condition"></a>

```csharp
public IapAgentRegistryEndpointIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference">IapAgentRegistryEndpointIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.conditionInput"></a>

```csharp
public IapAgentRegistryEndpointIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapAgentRegistryEndpointIamMemberCondition <a name="IapAgentRegistryEndpointIamMemberCondition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IapAgentRegistryEndpointIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#expression IapAgentRegistryEndpointIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#title IapAgentRegistryEndpointIamMember#title}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#description IapAgentRegistryEndpointIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#expression IapAgentRegistryEndpointIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#title IapAgentRegistryEndpointIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#description IapAgentRegistryEndpointIamMember#description}.

---

### IapAgentRegistryEndpointIamMemberConfig <a name="IapAgentRegistryEndpointIamMemberConfig" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IapAgentRegistryEndpointIamMemberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EndpointId,
    string Member,
    string Role,
    IapAgentRegistryEndpointIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#endpoint_id IapAgentRegistryEndpointIamMember#endpoint_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#member IapAgentRegistryEndpointIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#role IapAgentRegistryEndpointIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#id IapAgentRegistryEndpointIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#location IapAgentRegistryEndpointIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#project IapAgentRegistryEndpointIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#endpoint_id IapAgentRegistryEndpointIamMember#endpoint_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#member IapAgentRegistryEndpointIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#role IapAgentRegistryEndpointIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.condition"></a>

```csharp
public IapAgentRegistryEndpointIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#condition IapAgentRegistryEndpointIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#id IapAgentRegistryEndpointIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#location IapAgentRegistryEndpointIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iap_agent_registry_endpoint_iam_member#project IapAgentRegistryEndpointIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAgentRegistryEndpointIamMemberConditionOutputReference <a name="IapAgentRegistryEndpointIamMemberConditionOutputReference" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IapAgentRegistryEndpointIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public IapAgentRegistryEndpointIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamMember.IapAgentRegistryEndpointIamMemberCondition">IapAgentRegistryEndpointIamMemberCondition</a>

---




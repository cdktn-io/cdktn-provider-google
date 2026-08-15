# `workstationsWorkstationConfigIamMember` Submodule <a name="`workstationsWorkstationConfigIamMember` Submodule" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationConfigIamMember <a name="WorkstationsWorkstationConfigIamMember" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member google_workstations_workstation_config_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigIamMember(Construct Scope, string Id, WorkstationsWorkstationConfigIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig">WorkstationsWorkstationConfigIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig">WorkstationsWorkstationConfigIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.putCondition"></a>

```csharp
private void PutCondition(WorkstationsWorkstationConfigIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition">WorkstationsWorkstationConfigIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationConfigIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationConfigIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationConfigIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationConfigIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

WorkstationsWorkstationConfigIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkstationsWorkstationConfigIamMember resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkstationsWorkstationConfigIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkstationsWorkstationConfigIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationConfigIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference">WorkstationsWorkstationConfigIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition">WorkstationsWorkstationConfigIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.workstationConfigIdInput">WorkstationConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.condition"></a>

```csharp
public WorkstationsWorkstationConfigIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference">WorkstationsWorkstationConfigIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.conditionInput"></a>

```csharp
public WorkstationsWorkstationConfigIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition">WorkstationsWorkstationConfigIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.workstationClusterIdInput"></a>

```csharp
public string WorkstationClusterIdInput { get; }
```

- *Type:* string

---

##### `WorkstationConfigIdInput`<sup>Optional</sup> <a name="WorkstationConfigIdInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.workstationConfigIdInput"></a>

```csharp
public string WorkstationConfigIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; }
```

- *Type:* string

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationConfigIamMemberCondition <a name="WorkstationsWorkstationConfigIamMemberCondition" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#expression WorkstationsWorkstationConfigIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#title WorkstationsWorkstationConfigIamMember#title}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#description WorkstationsWorkstationConfigIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#expression WorkstationsWorkstationConfigIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#title WorkstationsWorkstationConfigIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#description WorkstationsWorkstationConfigIamMember#description}.

---

### WorkstationsWorkstationConfigIamMemberConfig <a name="WorkstationsWorkstationConfigIamMemberConfig" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigIamMemberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Member,
    string Role,
    string WorkstationClusterId,
    string WorkstationConfigId,
    WorkstationsWorkstationConfigIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#member WorkstationsWorkstationConfigIamMember#member}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#role WorkstationsWorkstationConfigIamMember#role}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#workstation_cluster_id WorkstationsWorkstationConfigIamMember#workstation_cluster_id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#workstation_config_id WorkstationsWorkstationConfigIamMember#workstation_config_id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition">WorkstationsWorkstationConfigIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#id WorkstationsWorkstationConfigIamMember#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#location WorkstationsWorkstationConfigIamMember#location}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#project WorkstationsWorkstationConfigIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#member WorkstationsWorkstationConfigIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#role WorkstationsWorkstationConfigIamMember#role}.

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#workstation_cluster_id WorkstationsWorkstationConfigIamMember#workstation_cluster_id}.

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#workstation_config_id WorkstationsWorkstationConfigIamMember#workstation_config_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.condition"></a>

```csharp
public WorkstationsWorkstationConfigIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition">WorkstationsWorkstationConfigIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#condition WorkstationsWorkstationConfigIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#id WorkstationsWorkstationConfigIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#location WorkstationsWorkstationConfigIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/workstations_workstation_config_iam_member#project WorkstationsWorkstationConfigIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationConfigIamMemberConditionOutputReference <a name="WorkstationsWorkstationConfigIamMemberConditionOutputReference" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new WorkstationsWorkstationConfigIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition">WorkstationsWorkstationConfigIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public WorkstationsWorkstationConfigIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationConfigIamMember.WorkstationsWorkstationConfigIamMemberCondition">WorkstationsWorkstationConfigIamMemberCondition</a>

---




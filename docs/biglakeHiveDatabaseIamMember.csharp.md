# `biglakeHiveDatabaseIamMember` Submodule <a name="`biglakeHiveDatabaseIamMember` Submodule" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveDatabaseIamMember <a name="BiglakeHiveDatabaseIamMember" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member google_biglake_hive_database_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveDatabaseIamMember(Construct Scope, string Id, BiglakeHiveDatabaseIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig">BiglakeHiveDatabaseIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig">BiglakeHiveDatabaseIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.putCondition"></a>

```csharp
private void PutCondition(BiglakeHiveDatabaseIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveDatabaseIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveDatabaseIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveDatabaseIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveDatabaseIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveDatabaseIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BiglakeHiveDatabaseIamMember resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeHiveDatabaseIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeHiveDatabaseIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveDatabaseIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference">BiglakeHiveDatabaseIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.condition"></a>

```csharp
public BiglakeHiveDatabaseIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference">BiglakeHiveDatabaseIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.conditionInput"></a>

```csharp
public BiglakeHiveDatabaseIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveDatabaseIamMemberCondition <a name="BiglakeHiveDatabaseIamMemberCondition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveDatabaseIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#expression BiglakeHiveDatabaseIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#title BiglakeHiveDatabaseIamMember#title}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#description BiglakeHiveDatabaseIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#expression BiglakeHiveDatabaseIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#title BiglakeHiveDatabaseIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#description BiglakeHiveDatabaseIamMember#description}.

---

### BiglakeHiveDatabaseIamMemberConfig <a name="BiglakeHiveDatabaseIamMemberConfig" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveDatabaseIamMemberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Catalog,
    string Member,
    string Name,
    string Role,
    BiglakeHiveDatabaseIamMemberCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#catalog BiglakeHiveDatabaseIamMember#catalog}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#member BiglakeHiveDatabaseIamMember#member}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#name BiglakeHiveDatabaseIamMember#name}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#role BiglakeHiveDatabaseIamMember#role}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#id BiglakeHiveDatabaseIamMember#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#project BiglakeHiveDatabaseIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#catalog BiglakeHiveDatabaseIamMember#catalog}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#member BiglakeHiveDatabaseIamMember#member}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#name BiglakeHiveDatabaseIamMember#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#role BiglakeHiveDatabaseIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.condition"></a>

```csharp
public BiglakeHiveDatabaseIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#condition BiglakeHiveDatabaseIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#id BiglakeHiveDatabaseIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_database_iam_member#project BiglakeHiveDatabaseIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveDatabaseIamMemberConditionOutputReference <a name="BiglakeHiveDatabaseIamMemberConditionOutputReference" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveDatabaseIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public BiglakeHiveDatabaseIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveDatabaseIamMember.BiglakeHiveDatabaseIamMemberCondition">BiglakeHiveDatabaseIamMemberCondition</a>

---




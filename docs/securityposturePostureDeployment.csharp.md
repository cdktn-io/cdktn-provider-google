# `securityposturePostureDeployment` Submodule <a name="`securityposturePostureDeployment` Submodule" id="@cdktn/provider-google.securityposturePostureDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityposturePostureDeployment <a name="SecurityposturePostureDeployment" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment google_securityposture_posture_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecurityposturePostureDeployment(Construct Scope, string Id, SecurityposturePostureDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig">SecurityposturePostureDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig">SecurityposturePostureDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityposturePostureDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityposturePostureDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecurityposturePostureDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecurityposturePostureDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecurityposturePostureDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

SecurityposturePostureDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityposturePostureDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityposturePostureDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityposturePostureDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityposturePostureDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureId">DesiredPostureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureRevisionId">DesiredPostureRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.reconciling">Reconciling</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference">SecurityposturePostureDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentIdInput">PostureDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureIdInput">PostureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionIdInput">PostureRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResourceInput">TargetResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentId">PostureDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureId">PostureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionId">PostureRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResource">TargetResource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DesiredPostureId`<sup>Required</sup> <a name="DesiredPostureId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureId"></a>

```csharp
public string DesiredPostureId { get; }
```

- *Type:* string

---

##### `DesiredPostureRevisionId`<sup>Required</sup> <a name="DesiredPostureRevisionId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.desiredPostureRevisionId"></a>

```csharp
public string DesiredPostureRevisionId { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeouts"></a>

```csharp
public SecurityposturePostureDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference">SecurityposturePostureDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PostureDeploymentIdInput`<sup>Optional</sup> <a name="PostureDeploymentIdInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentIdInput"></a>

```csharp
public string PostureDeploymentIdInput { get; }
```

- *Type:* string

---

##### `PostureIdInput`<sup>Optional</sup> <a name="PostureIdInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureIdInput"></a>

```csharp
public string PostureIdInput { get; }
```

- *Type:* string

---

##### `PostureRevisionIdInput`<sup>Optional</sup> <a name="PostureRevisionIdInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionIdInput"></a>

```csharp
public string PostureRevisionIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceInput`<sup>Optional</sup> <a name="TargetResourceInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResourceInput"></a>

```csharp
public string TargetResourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.timeoutsInput"></a>

```csharp
public IResolvable|SecurityposturePostureDeploymentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `PostureDeploymentId`<sup>Required</sup> <a name="PostureDeploymentId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureDeploymentId"></a>

```csharp
public string PostureDeploymentId { get; }
```

- *Type:* string

---

##### `PostureId`<sup>Required</sup> <a name="PostureId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureId"></a>

```csharp
public string PostureId { get; }
```

- *Type:* string

---

##### `PostureRevisionId`<sup>Required</sup> <a name="PostureRevisionId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.postureRevisionId"></a>

```csharp
public string PostureRevisionId { get; }
```

- *Type:* string

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.targetResource"></a>

```csharp
public string TargetResource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityposturePostureDeploymentConfig <a name="SecurityposturePostureDeploymentConfig" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecurityposturePostureDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Parent,
    string PostureDeploymentId,
    string PostureId,
    string PostureRevisionId,
    string TargetResource,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    SecurityposturePostureDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureDeploymentId">PostureDeploymentId</a></code> | <code>string</code> | ID of the posture deployment. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureId">PostureId</a></code> | <code>string</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureRevisionId">PostureRevisionId</a></code> | <code>string</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.targetResource">TargetResource</a></code> | <code>string</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Description of the posture deployment. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#location SecurityposturePostureDeployment#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#parent SecurityposturePostureDeployment#parent}

---

##### `PostureDeploymentId`<sup>Required</sup> <a name="PostureDeploymentId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureDeploymentId"></a>

```csharp
public string PostureDeploymentId { get; set; }
```

- *Type:* string

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#posture_deployment_id SecurityposturePostureDeployment#posture_deployment_id}

---

##### `PostureId`<sup>Required</sup> <a name="PostureId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureId"></a>

```csharp
public string PostureId { get; set; }
```

- *Type:* string

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#posture_id SecurityposturePostureDeployment#posture_id}

---

##### `PostureRevisionId`<sup>Required</sup> <a name="PostureRevisionId" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.postureRevisionId"></a>

```csharp
public string PostureRevisionId { get; set; }
```

- *Type:* string

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#posture_revision_id SecurityposturePostureDeployment#posture_revision_id}

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.targetResource"></a>

```csharp
public string TargetResource { get; set; }
```

- *Type:* string

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#target_resource SecurityposturePostureDeployment#target_resource}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#deletion_policy SecurityposturePostureDeployment#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#description SecurityposturePostureDeployment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentConfig.property.timeouts"></a>

```csharp
public SecurityposturePostureDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#timeouts SecurityposturePostureDeployment#timeouts}

---

### SecurityposturePostureDeploymentTimeouts <a name="SecurityposturePostureDeploymentTimeouts" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecurityposturePostureDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#create SecurityposturePostureDeployment#create}. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#delete SecurityposturePostureDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#update SecurityposturePostureDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#create SecurityposturePostureDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#delete SecurityposturePostureDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/securityposture_posture_deployment#update SecurityposturePostureDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityposturePostureDeploymentTimeoutsOutputReference <a name="SecurityposturePostureDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SecurityposturePostureDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityposturePostureDeploymentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.securityposturePostureDeployment.SecurityposturePostureDeploymentTimeouts">SecurityposturePostureDeploymentTimeouts</a>

---




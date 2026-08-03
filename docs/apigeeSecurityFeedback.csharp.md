# `apigeeSecurityFeedback` Submodule <a name="`apigeeSecurityFeedback` Submodule" id="@cdktn/provider-google.apigeeSecurityFeedback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityFeedback <a name="ApigeeSecurityFeedback" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback google_apigee_security_feedback}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeSecurityFeedback(Construct Scope, string Id, ApigeeSecurityFeedbackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig">ApigeeSecurityFeedbackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig">ApigeeSecurityFeedbackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts">PutFeedbackContexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetReason">ResetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeedbackContexts` <a name="PutFeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts"></a>

```csharp
private void PutFeedbackContexts(IResolvable|ApigeeSecurityFeedbackFeedbackContexts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeSecurityFeedbackTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReason` <a name="ResetReason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetReason"></a>

```csharp
private void ResetReason()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeSecurityFeedback.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeSecurityFeedback.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeSecurityFeedback.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApigeeSecurityFeedback.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeSecurityFeedback to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeSecurityFeedback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityFeedback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContexts">FeedbackContexts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList">ApigeeSecurityFeedbackFeedbackContextsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference">ApigeeSecurityFeedbackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContextsInput">FeedbackContextsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackIdInput">FeedbackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackTypeInput">FeedbackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reasonInput">ReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackId">FeedbackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackType">FeedbackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reason">Reason</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `FeedbackContexts`<sup>Required</sup> <a name="FeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContexts"></a>

```csharp
public ApigeeSecurityFeedbackFeedbackContextsList FeedbackContexts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList">ApigeeSecurityFeedbackFeedbackContextsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeouts"></a>

```csharp
public ApigeeSecurityFeedbackTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference">ApigeeSecurityFeedbackTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FeedbackContextsInput`<sup>Optional</sup> <a name="FeedbackContextsInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContextsInput"></a>

```csharp
public IResolvable|ApigeeSecurityFeedbackFeedbackContexts[] FeedbackContextsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]

---

##### `FeedbackIdInput`<sup>Optional</sup> <a name="FeedbackIdInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackIdInput"></a>

```csharp
public string FeedbackIdInput { get; }
```

- *Type:* string

---

##### `FeedbackTypeInput`<sup>Optional</sup> <a name="FeedbackTypeInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackTypeInput"></a>

```csharp
public string FeedbackTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reasonInput"></a>

```csharp
public string ReasonInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeoutsInput"></a>

```csharp
public IResolvable|ApigeeSecurityFeedbackTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FeedbackId`<sup>Required</sup> <a name="FeedbackId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackId"></a>

```csharp
public string FeedbackId { get; }
```

- *Type:* string

---

##### `FeedbackType`<sup>Required</sup> <a name="FeedbackType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackType"></a>

```csharp
public string FeedbackType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityFeedbackConfig <a name="ApigeeSecurityFeedbackConfig" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeSecurityFeedbackConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ApigeeSecurityFeedbackFeedbackContexts[] FeedbackContexts,
    string FeedbackId,
    string FeedbackType,
    string OrgId,
    string Comment = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    string Reason = null,
    ApigeeSecurityFeedbackTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackContexts">FeedbackContexts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | feedback_contexts block. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackId">FeedbackId</a></code> | <code>string</code> | Resource ID of the security feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackType">FeedbackType</a></code> | <code>string</code> | The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.orgId">OrgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.comment">Comment</a></code> | <code>string</code> | Optional text the user can provide for additional, unstructured context. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.reason">Reason</a></code> | <code>string</code> | The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FeedbackContexts`<sup>Required</sup> <a name="FeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackContexts"></a>

```csharp
public IResolvable|ApigeeSecurityFeedbackFeedbackContexts[] FeedbackContexts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]

feedback_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#feedback_contexts ApigeeSecurityFeedback#feedback_contexts}

---

##### `FeedbackId`<sup>Required</sup> <a name="FeedbackId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackId"></a>

```csharp
public string FeedbackId { get; set; }
```

- *Type:* string

Resource ID of the security feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#feedback_id ApigeeSecurityFeedback#feedback_id}

---

##### `FeedbackType`<sup>Required</sup> <a name="FeedbackType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackType"></a>

```csharp
public string FeedbackType { get; set; }
```

- *Type:* string

The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#feedback_type ApigeeSecurityFeedback#feedback_type}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#org_id ApigeeSecurityFeedback#org_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Optional text the user can provide for additional, unstructured context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#comment ApigeeSecurityFeedback#comment}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#deletion_policy ApigeeSecurityFeedback#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#display_name ApigeeSecurityFeedback#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.reason"></a>

```csharp
public string Reason { get; set; }
```

- *Type:* string

The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#reason ApigeeSecurityFeedback#reason}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.timeouts"></a>

```csharp
public ApigeeSecurityFeedbackTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#timeouts ApigeeSecurityFeedback#timeouts}

---

### ApigeeSecurityFeedbackFeedbackContexts <a name="ApigeeSecurityFeedbackFeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeSecurityFeedbackFeedbackContexts {
    string Attribute,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.attribute">Attribute</a></code> | <code>string</code> | The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.values">Values</a></code> | <code>string[]</code> | The values of the attribute the user is providing feedback about, separated by commas. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#attribute ApigeeSecurityFeedback#attribute}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The values of the attribute the user is providing feedback about, separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#values ApigeeSecurityFeedback#values}

---

### ApigeeSecurityFeedbackTimeouts <a name="ApigeeSecurityFeedbackTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeSecurityFeedbackTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityFeedbackFeedbackContextsList <a name="ApigeeSecurityFeedbackFeedbackContextsList" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeSecurityFeedbackFeedbackContextsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get"></a>

```csharp
private ApigeeSecurityFeedbackFeedbackContextsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.internalValue"></a>

```csharp
public IResolvable|ApigeeSecurityFeedbackFeedbackContexts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]

---


### ApigeeSecurityFeedbackFeedbackContextsOutputReference <a name="ApigeeSecurityFeedbackFeedbackContextsOutputReference" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeSecurityFeedbackFeedbackContextsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigeeSecurityFeedbackFeedbackContexts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>

---


### ApigeeSecurityFeedbackTimeoutsOutputReference <a name="ApigeeSecurityFeedbackTimeoutsOutputReference" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApigeeSecurityFeedbackTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigeeSecurityFeedbackTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---




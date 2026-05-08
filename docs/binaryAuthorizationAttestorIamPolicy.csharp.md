# `binaryAuthorizationAttestorIamPolicy` Submodule <a name="`binaryAuthorizationAttestorIamPolicy` Submodule" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationAttestorIamPolicy <a name="BinaryAuthorizationAttestorIamPolicy" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy google_binary_authorization_attestor_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BinaryAuthorizationAttestorIamPolicy(Construct Scope, string Id, BinaryAuthorizationAttestorIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig">BinaryAuthorizationAttestorIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig">BinaryAuthorizationAttestorIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BinaryAuthorizationAttestorIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BinaryAuthorizationAttestorIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BinaryAuthorizationAttestorIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BinaryAuthorizationAttestorIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BinaryAuthorizationAttestorIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BinaryAuthorizationAttestorIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BinaryAuthorizationAttestorIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BinaryAuthorizationAttestorIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BinaryAuthorizationAttestorIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.attestorInput">AttestorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.attestor">Attestor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `AttestorInput`<sup>Optional</sup> <a name="AttestorInput" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.attestorInput"></a>

```csharp
public string AttestorInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.attestor"></a>

```csharp
public string Attestor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationAttestorIamPolicyConfig <a name="BinaryAuthorizationAttestorIamPolicyConfig" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BinaryAuthorizationAttestorIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Attestor,
    string PolicyData,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.attestor">Attestor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#attestor BinaryAuthorizationAttestorIamPolicy#attestor}. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#policy_data BinaryAuthorizationAttestorIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#id BinaryAuthorizationAttestorIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#project BinaryAuthorizationAttestorIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.attestor"></a>

```csharp
public string Attestor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#attestor BinaryAuthorizationAttestorIamPolicy#attestor}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#policy_data BinaryAuthorizationAttestorIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#id BinaryAuthorizationAttestorIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_attestor_iam_policy#project BinaryAuthorizationAttestorIamPolicy#project}.

---




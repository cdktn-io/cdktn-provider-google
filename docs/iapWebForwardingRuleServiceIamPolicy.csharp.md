# `iapWebForwardingRuleServiceIamPolicy` Submodule <a name="`iapWebForwardingRuleServiceIamPolicy` Submodule" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapWebForwardingRuleServiceIamPolicy <a name="IapWebForwardingRuleServiceIamPolicy" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy google_iap_web_forwarding_rule_service_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IapWebForwardingRuleServiceIamPolicy(Construct Scope, string Id, IapWebForwardingRuleServiceIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig">IapWebForwardingRuleServiceIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig">IapWebForwardingRuleServiceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IapWebForwardingRuleServiceIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

IapWebForwardingRuleServiceIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

IapWebForwardingRuleServiceIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

IapWebForwardingRuleServiceIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

IapWebForwardingRuleServiceIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IapWebForwardingRuleServiceIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IapWebForwardingRuleServiceIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IapWebForwardingRuleServiceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IapWebForwardingRuleServiceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.forwardingRuleServiceNameInput">ForwardingRuleServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.forwardingRuleServiceName">ForwardingRuleServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ForwardingRuleServiceNameInput`<sup>Optional</sup> <a name="ForwardingRuleServiceNameInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.forwardingRuleServiceNameInput"></a>

```csharp
public string ForwardingRuleServiceNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ForwardingRuleServiceName`<sup>Required</sup> <a name="ForwardingRuleServiceName" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.forwardingRuleServiceName"></a>

```csharp
public string ForwardingRuleServiceName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapWebForwardingRuleServiceIamPolicyConfig <a name="IapWebForwardingRuleServiceIamPolicyConfig" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IapWebForwardingRuleServiceIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ForwardingRuleServiceName,
    string PolicyData,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.forwardingRuleServiceName">ForwardingRuleServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#forwarding_rule_service_name IapWebForwardingRuleServiceIamPolicy#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#policy_data IapWebForwardingRuleServiceIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#id IapWebForwardingRuleServiceIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#project IapWebForwardingRuleServiceIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ForwardingRuleServiceName`<sup>Required</sup> <a name="ForwardingRuleServiceName" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.forwardingRuleServiceName"></a>

```csharp
public string ForwardingRuleServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#forwarding_rule_service_name IapWebForwardingRuleServiceIamPolicy#forwarding_rule_service_name}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#policy_data IapWebForwardingRuleServiceIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#id IapWebForwardingRuleServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.iapWebForwardingRuleServiceIamPolicy.IapWebForwardingRuleServiceIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#project IapWebForwardingRuleServiceIamPolicy#project}.

---




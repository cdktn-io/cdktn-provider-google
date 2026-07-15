# `healthcareHl7V2StoreIamPolicy` Submodule <a name="`healthcareHl7V2StoreIamPolicy` Submodule" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2StoreIamPolicy <a name="HealthcareHl7V2StoreIamPolicy" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/healthcare_hl7_v2_store_iam_policy google_healthcare_hl7_v2_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.Initializer"></a>

```typescript
import { healthcareHl7V2StoreIamPolicy } from '@cdktn/provider-google'

new healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy(scope: Construct, id: string, config: HealthcareHl7V2StoreIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig">HealthcareHl7V2StoreIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig">HealthcareHl7V2StoreIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthcareHl7V2StoreIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isConstruct"></a>

```typescript
import { healthcareHl7V2StoreIamPolicy } from '@cdktn/provider-google'

healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isTerraformElement"></a>

```typescript
import { healthcareHl7V2StoreIamPolicy } from '@cdktn/provider-google'

healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isTerraformResource"></a>

```typescript
import { healthcareHl7V2StoreIamPolicy } from '@cdktn/provider-google'

healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.generateConfigForImport"></a>

```typescript
import { healthcareHl7V2StoreIamPolicy } from '@cdktn/provider-google'

healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HealthcareHl7V2StoreIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareHl7V2StoreIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareHl7V2StoreIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/healthcare_hl7_v2_store_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HealthcareHl7V2StoreIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.hl7V2StoreIdInput">hl7V2StoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.hl7V2StoreId">hl7V2StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `hl7V2StoreIdInput`<sup>Optional</sup> <a name="hl7V2StoreIdInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.hl7V2StoreIdInput"></a>

```typescript
public readonly hl7V2StoreIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `hl7V2StoreId`<sup>Required</sup> <a name="hl7V2StoreId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.hl7V2StoreId"></a>

```typescript
public readonly hl7V2StoreId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreIamPolicyConfig <a name="HealthcareHl7V2StoreIamPolicyConfig" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.Initializer"></a>

```typescript
import { healthcareHl7V2StoreIamPolicy } from '@cdktn/provider-google'

const healthcareHl7V2StoreIamPolicyConfig: healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.hl7V2StoreId">hl7V2StoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/healthcare_hl7_v2_store_iam_policy#hl7_v2_store_id HealthcareHl7V2StoreIamPolicy#hl7_v2_store_id}. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/healthcare_hl7_v2_store_iam_policy#policy_data HealthcareHl7V2StoreIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/healthcare_hl7_v2_store_iam_policy#id HealthcareHl7V2StoreIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hl7V2StoreId`<sup>Required</sup> <a name="hl7V2StoreId" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.hl7V2StoreId"></a>

```typescript
public readonly hl7V2StoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/healthcare_hl7_v2_store_iam_policy#hl7_v2_store_id HealthcareHl7V2StoreIamPolicy#hl7_v2_store_id}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/healthcare_hl7_v2_store_iam_policy#policy_data HealthcareHl7V2StoreIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.healthcareHl7V2StoreIamPolicy.HealthcareHl7V2StoreIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/healthcare_hl7_v2_store_iam_policy#id HealthcareHl7V2StoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




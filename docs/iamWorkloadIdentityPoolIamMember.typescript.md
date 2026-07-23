# `iamWorkloadIdentityPoolIamMember` Submodule <a name="`iamWorkloadIdentityPoolIamMember` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolIamMember <a name="IamWorkloadIdentityPoolIamMember" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member google_iam_workload_identity_pool_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolIamMember } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember(scope: Construct, id: string, config: IamWorkloadIdentityPoolIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig">IamWorkloadIdentityPoolIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig">IamWorkloadIdentityPoolIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.putCondition"></a>

```typescript
public putCondition(value: IamWorkloadIdentityPoolIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition">IamWorkloadIdentityPoolIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPoolIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isConstruct"></a>

```typescript
import { iamWorkloadIdentityPoolIamMember } from '@cdktn/provider-google'

iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isTerraformElement"></a>

```typescript
import { iamWorkloadIdentityPoolIamMember } from '@cdktn/provider-google'

iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isTerraformResource"></a>

```typescript
import { iamWorkloadIdentityPoolIamMember } from '@cdktn/provider-google'

iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.generateConfigForImport"></a>

```typescript
import { iamWorkloadIdentityPoolIamMember } from '@cdktn/provider-google'

iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamWorkloadIdentityPoolIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkloadIdentityPoolIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkloadIdentityPoolIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference">IamWorkloadIdentityPoolIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition">IamWorkloadIdentityPoolIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.condition"></a>

```typescript
public readonly condition: IamWorkloadIdentityPoolIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference">IamWorkloadIdentityPoolIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: IamWorkloadIdentityPoolIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition">IamWorkloadIdentityPoolIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolIamMemberCondition <a name="IamWorkloadIdentityPoolIamMemberCondition" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolIamMember } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolIamMemberCondition: iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#expression IamWorkloadIdentityPoolIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#title IamWorkloadIdentityPoolIamMember#title}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#description IamWorkloadIdentityPoolIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#expression IamWorkloadIdentityPoolIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#title IamWorkloadIdentityPoolIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#description IamWorkloadIdentityPoolIamMember#description}.

---

### IamWorkloadIdentityPoolIamMemberConfig <a name="IamWorkloadIdentityPoolIamMemberConfig" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolIamMember } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolIamMemberConfig: iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#member IamWorkloadIdentityPoolIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#role IamWorkloadIdentityPoolIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#workload_identity_pool_id IamWorkloadIdentityPoolIamMember#workload_identity_pool_id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition">IamWorkloadIdentityPoolIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#id IamWorkloadIdentityPoolIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#project IamWorkloadIdentityPoolIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#member IamWorkloadIdentityPoolIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#role IamWorkloadIdentityPoolIamMember#role}.

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#workload_identity_pool_id IamWorkloadIdentityPoolIamMember#workload_identity_pool_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: IamWorkloadIdentityPoolIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition">IamWorkloadIdentityPoolIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#condition IamWorkloadIdentityPoolIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#id IamWorkloadIdentityPoolIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_member#project IamWorkloadIdentityPoolIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolIamMemberConditionOutputReference <a name="IamWorkloadIdentityPoolIamMemberConditionOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolIamMember } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition">IamWorkloadIdentityPoolIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkloadIdentityPoolIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamMember.IamWorkloadIdentityPoolIamMemberCondition">IamWorkloadIdentityPoolIamMemberCondition</a>

---




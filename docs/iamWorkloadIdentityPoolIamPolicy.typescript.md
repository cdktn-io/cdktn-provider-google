# `iamWorkloadIdentityPoolIamPolicy` Submodule <a name="`iamWorkloadIdentityPoolIamPolicy` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolIamPolicy <a name="IamWorkloadIdentityPoolIamPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy google_iam_workload_identity_pool_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolIamPolicy } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy(scope: Construct, id: string, config: IamWorkloadIdentityPoolIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig">IamWorkloadIdentityPoolIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig">IamWorkloadIdentityPoolIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPoolIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isConstruct"></a>

```typescript
import { iamWorkloadIdentityPoolIamPolicy } from '@cdktn/provider-google'

iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformElement"></a>

```typescript
import { iamWorkloadIdentityPoolIamPolicy } from '@cdktn/provider-google'

iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformResource"></a>

```typescript
import { iamWorkloadIdentityPoolIamPolicy } from '@cdktn/provider-google'

iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport"></a>

```typescript
import { iamWorkloadIdentityPoolIamPolicy } from '@cdktn/provider-google'

iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamWorkloadIdentityPoolIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkloadIdentityPoolIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkloadIdentityPoolIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolIamPolicyConfig <a name="IamWorkloadIdentityPoolIamPolicyConfig" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolIamPolicy } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolIamPolicyConfig: iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#policy_data IamWorkloadIdentityPoolIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#workload_identity_pool_id IamWorkloadIdentityPoolIamPolicy#workload_identity_pool_id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#id IamWorkloadIdentityPoolIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#project IamWorkloadIdentityPoolIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#policy_data IamWorkloadIdentityPoolIamPolicy#policy_data}.

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#workload_identity_pool_id IamWorkloadIdentityPoolIamPolicy#workload_identity_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#id IamWorkloadIdentityPoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolIamPolicy.IamWorkloadIdentityPoolIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_iam_policy#project IamWorkloadIdentityPoolIamPolicy#project}.

---




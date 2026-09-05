# `iamProjectAccessPolicy` Submodule <a name="`iamProjectAccessPolicy` Submodule" id="@cdktn/provider-google.iamProjectAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamProjectAccessPolicy <a name="IamProjectAccessPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy google_iam_project_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

new iamProjectAccessPolicy.IamProjectAccessPolicy(scope: Construct, id: string, config: IamProjectAccessPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig">IamProjectAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig">IamProjectAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails"></a>

```typescript
public putDetails(value: IamProjectAccessPolicyDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: IamProjectAccessPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDetails` <a name="resetDetails" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDetails"></a>

```typescript
public resetDetails(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamProjectAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamProjectAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamProjectAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamProjectAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamProjectAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference">IamProjectAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference">IamProjectAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyIdInput">accessPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.details"></a>

```typescript
public readonly details: IamProjectAccessPolicyDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference">IamProjectAccessPolicyDetailsOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: IamProjectAccessPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference">IamProjectAccessPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessPolicyIdInput`<sup>Optional</sup> <a name="accessPolicyIdInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyIdInput"></a>

```typescript
public readonly accessPolicyIdInput: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.detailsInput"></a>

```typescript
public readonly detailsInput: IamProjectAccessPolicyDetails;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamProjectAccessPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamProjectAccessPolicyConfig <a name="IamProjectAccessPolicyConfig" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

const iamProjectAccessPolicyConfig: iamProjectAccessPolicy.IamProjectAccessPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#id IamProjectAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#project IamProjectAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#access_policy_id IamProjectAccessPolicy#access_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#location IamProjectAccessPolicy#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#annotations IamProjectAccessPolicy#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#deletion_policy IamProjectAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.details"></a>

```typescript
public readonly details: IamProjectAccessPolicyDetails;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#details IamProjectAccessPolicy#details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#display_name IamProjectAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#id IamProjectAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#project IamProjectAccessPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamProjectAccessPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#timeouts IamProjectAccessPolicy#timeouts}

---

### IamProjectAccessPolicyDetails <a name="IamProjectAccessPolicyDetails" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

const iamProjectAccessPolicyDetails: iamProjectAccessPolicy.IamProjectAccessPolicyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>[]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails.property.rules"></a>

```typescript
public readonly rules: IResolvable | IamProjectAccessPolicyDetailsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#rules IamProjectAccessPolicy#rules}

---

### IamProjectAccessPolicyDetailsRules <a name="IamProjectAccessPolicyDetailsRules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

const iamProjectAccessPolicyDetailsRules: iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.effect">effect</a></code> | <code>string</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.principals">principals</a></code> | <code>string[]</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.description">description</a></code> | <code>string</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.excludedPrincipals">excludedPrincipals</a></code> | <code>string[]</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#effect IamProjectAccessPolicy#effect}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.operation"></a>

```typescript
public readonly operation: IamProjectAccessPolicyDetailsRulesOperation;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#operation IamProjectAccessPolicy#operation}

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:
* 'principal://goog/subject/{email_id}': A specific Google Account.
Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
A Google Cloud service account. For example,
'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
principals associated with the specified Google Workspace or Cloud
Identity customer ID. For example,
'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
If an identifier that was previously set on a policy is soft deleted, then
calls to read that policy will return the identifier with a deleted
prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
Google Account that was deleted recently. For example,
'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
the Google Account is recovered, this identifier reverts to the standard
identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
that was deleted recently. For example,
'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
If the Google group is restored, this identifier reverts to the standard
identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
A Google Cloud service account that was deleted recently. For example,
'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
If the service account is undeleted, this identifier reverts to the
standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#principals IamProjectAccessPolicy#principals}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | IamProjectAccessPolicyDetailsRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#conditions IamProjectAccessPolicy#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#description IamProjectAccessPolicy#description}

---

##### `excludedPrincipals`<sup>Optional</sup> <a name="excludedPrincipals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```typescript
public readonly excludedPrincipals: string[];
```

- *Type:* string[]

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#excluded_principals IamProjectAccessPolicy#excluded_principals}

---

### IamProjectAccessPolicyDetailsRulesConditions <a name="IamProjectAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

const iamProjectAccessPolicyDetailsRulesConditions: iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#service IamProjectAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#service IamProjectAccessPolicy#service}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#expression IamProjectAccessPolicy#expression}

---

### IamProjectAccessPolicyDetailsRulesOperation <a name="IamProjectAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

const iamProjectAccessPolicyDetailsRulesOperation: iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.permissions">permissions</a></code> | <code>string[]</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions">excludedPermissions</a></code> | <code>string[]</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:
* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#permissions IamProjectAccessPolicy#permissions}

---

##### `excludedPermissions`<sup>Optional</sup> <a name="excludedPermissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```typescript
public readonly excludedPermissions: string[];
```

- *Type:* string[]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' _and_ in 'excluded_permissions' then it will _not_ be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#excluded_permissions IamProjectAccessPolicy#excluded_permissions}

---

### IamProjectAccessPolicyTimeouts <a name="IamProjectAccessPolicyTimeouts" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

const iamProjectAccessPolicyTimeouts: iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#create IamProjectAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#delete IamProjectAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#update IamProjectAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#create IamProjectAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#delete IamProjectAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/iam_project_access_policy#update IamProjectAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamProjectAccessPolicyDetailsOutputReference <a name="IamProjectAccessPolicyDetailsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

new iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | IamProjectAccessPolicyDetailsRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList">IamProjectAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rules"></a>

```typescript
public readonly rules: IamProjectAccessPolicyDetailsRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList">IamProjectAccessPolicyDetailsRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | IamProjectAccessPolicyDetailsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamProjectAccessPolicyDetails;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetails">IamProjectAccessPolicyDetails</a>

---


### IamProjectAccessPolicyDetailsRulesConditionsList <a name="IamProjectAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

new iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get"></a>

```typescript
public get(index: number): IamProjectAccessPolicyDetailsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamProjectAccessPolicyDetailsRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>[]

---


### IamProjectAccessPolicyDetailsRulesConditionsOutputReference <a name="IamProjectAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

new iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamProjectAccessPolicyDetailsRulesConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>

---


### IamProjectAccessPolicyDetailsRulesList <a name="IamProjectAccessPolicyDetailsRulesList" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

new iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get"></a>

```typescript
public get(index: number): IamProjectAccessPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamProjectAccessPolicyDetailsRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>[]

---


### IamProjectAccessPolicyDetailsRulesOperationOutputReference <a name="IamProjectAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

new iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">resetExcludedPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedPermissions` <a name="resetExcludedPermissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```typescript
public resetExcludedPermissions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">excludedPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">excludedPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedPermissionsInput`<sup>Optional</sup> <a name="excludedPermissionsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```typescript
public readonly excludedPermissionsInput: string[];
```

- *Type:* string[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `excludedPermissions`<sup>Required</sup> <a name="excludedPermissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```typescript
public readonly excludedPermissions: string[];
```

- *Type:* string[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamProjectAccessPolicyDetailsRulesOperation;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

---


### IamProjectAccessPolicyDetailsRulesOutputReference <a name="IamProjectAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

new iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation">putOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">resetExcludedPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | IamProjectAccessPolicyDetailsRulesConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>[]

---

##### `putOperation` <a name="putOperation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```typescript
public putOperation(value: IamProjectAccessPolicyDetailsRulesOperation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludedPrincipals` <a name="resetExcludedPrincipals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```typescript
public resetExcludedPrincipals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList">IamProjectAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference">IamProjectAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">excludedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput">operationInput</a></code> | <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">excludedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: IamProjectAccessPolicyDetailsRulesConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditionsList">IamProjectAccessPolicyDetailsRulesConditionsList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```typescript
public readonly operation: IamProjectAccessPolicyDetailsRulesOperationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperationOutputReference">IamProjectAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | IamProjectAccessPolicyDetailsRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesConditions">IamProjectAccessPolicyDetailsRulesConditions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `excludedPrincipalsInput`<sup>Optional</sup> <a name="excludedPrincipalsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```typescript
public readonly excludedPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: IamProjectAccessPolicyDetailsRulesOperation;
```

- *Type:* <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOperation">IamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `excludedPrincipals`<sup>Required</sup> <a name="excludedPrincipals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```typescript
public readonly excludedPrincipals: string[];
```

- *Type:* string[]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamProjectAccessPolicyDetailsRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyDetailsRules">IamProjectAccessPolicyDetailsRules</a>

---


### IamProjectAccessPolicyTimeoutsOutputReference <a name="IamProjectAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamProjectAccessPolicy } from '@cdktn/provider-google'

new iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamProjectAccessPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamProjectAccessPolicy.IamProjectAccessPolicyTimeouts">IamProjectAccessPolicyTimeouts</a>

---




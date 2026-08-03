# `workstationsWorkstationIamPolicy` Submodule <a name="`workstationsWorkstationIamPolicy` Submodule" id="@cdktn/provider-google.workstationsWorkstationIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstationIamPolicy <a name="WorkstationsWorkstationIamPolicy" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy google_workstations_workstation_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer"></a>

```typescript
import { workstationsWorkstationIamPolicy } from '@cdktn/provider-google'

new workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy(scope: Construct, id: string, config: WorkstationsWorkstationIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig">WorkstationsWorkstationIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig">WorkstationsWorkstationIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkstationsWorkstationIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isConstruct"></a>

```typescript
import { workstationsWorkstationIamPolicy } from '@cdktn/provider-google'

workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformElement"></a>

```typescript
import { workstationsWorkstationIamPolicy } from '@cdktn/provider-google'

workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformResource"></a>

```typescript
import { workstationsWorkstationIamPolicy } from '@cdktn/provider-google'

workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport"></a>

```typescript
import { workstationsWorkstationIamPolicy } from '@cdktn/provider-google'

workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkstationsWorkstationIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkstationsWorkstationIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkstationsWorkstationIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstationIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationClusterIdInput">workstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationConfigIdInput">workstationConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationIdInput">workstationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationConfigId">workstationConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationId">workstationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `workstationClusterIdInput`<sup>Optional</sup> <a name="workstationClusterIdInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationClusterIdInput"></a>

```typescript
public readonly workstationClusterIdInput: string;
```

- *Type:* string

---

##### `workstationConfigIdInput`<sup>Optional</sup> <a name="workstationConfigIdInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationConfigIdInput"></a>

```typescript
public readonly workstationConfigIdInput: string;
```

- *Type:* string

---

##### `workstationIdInput`<sup>Optional</sup> <a name="workstationIdInput" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationIdInput"></a>

```typescript
public readonly workstationIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationConfigId"></a>

```typescript
public readonly workstationConfigId: string;
```

- *Type:* string

---

##### `workstationId`<sup>Required</sup> <a name="workstationId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.workstationId"></a>

```typescript
public readonly workstationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationIamPolicyConfig <a name="WorkstationsWorkstationIamPolicyConfig" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.Initializer"></a>

```typescript
import { workstationsWorkstationIamPolicy } from '@cdktn/provider-google'

const workstationsWorkstationIamPolicyConfig: workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#policy_data WorkstationsWorkstationIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#workstation_cluster_id WorkstationsWorkstationIamPolicy#workstation_cluster_id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationConfigId">workstationConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#workstation_config_id WorkstationsWorkstationIamPolicy#workstation_config_id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationId">workstationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#workstation_id WorkstationsWorkstationIamPolicy#workstation_id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#id WorkstationsWorkstationIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#location WorkstationsWorkstationIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#project WorkstationsWorkstationIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#policy_data WorkstationsWorkstationIamPolicy#policy_data}.

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#workstation_cluster_id WorkstationsWorkstationIamPolicy#workstation_cluster_id}.

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationConfigId"></a>

```typescript
public readonly workstationConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#workstation_config_id WorkstationsWorkstationIamPolicy#workstation_config_id}.

---

##### `workstationId`<sup>Required</sup> <a name="workstationId" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.workstationId"></a>

```typescript
public readonly workstationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#workstation_id WorkstationsWorkstationIamPolicy#workstation_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#id WorkstationsWorkstationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#location WorkstationsWorkstationIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstationIamPolicy.WorkstationsWorkstationIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/workstations_workstation_iam_policy#project WorkstationsWorkstationIamPolicy#project}.

---




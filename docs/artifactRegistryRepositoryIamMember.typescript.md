# `artifactRegistryRepositoryIamMember` Submodule <a name="`artifactRegistryRepositoryIamMember` Submodule" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRepositoryIamMember <a name="ArtifactRegistryRepositoryIamMember" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member google_artifact_registry_repository_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer"></a>

```typescript
import { artifactRegistryRepositoryIamMember } from '@cdktn/provider-google'

new artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember(scope: Construct, id: string, config: ArtifactRegistryRepositoryIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig">ArtifactRegistryRepositoryIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig">ArtifactRegistryRepositoryIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition"></a>

```typescript
public putCondition(value: ArtifactRegistryRepositoryIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactRegistryRepositoryIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct"></a>

```typescript
import { artifactRegistryRepositoryIamMember } from '@cdktn/provider-google'

artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement"></a>

```typescript
import { artifactRegistryRepositoryIamMember } from '@cdktn/provider-google'

artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource"></a>

```typescript
import { artifactRegistryRepositoryIamMember } from '@cdktn/provider-google'

artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport"></a>

```typescript
import { artifactRegistryRepositoryIamMember } from '@cdktn/provider-google'

artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ArtifactRegistryRepositoryIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactRegistryRepositoryIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactRegistryRepositoryIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryRepositoryIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference">ArtifactRegistryRepositoryIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.condition"></a>

```typescript
public readonly condition: ArtifactRegistryRepositoryIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference">ArtifactRegistryRepositoryIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: ArtifactRegistryRepositoryIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRepositoryIamMemberCondition <a name="ArtifactRegistryRepositoryIamMemberCondition" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.Initializer"></a>

```typescript
import { artifactRegistryRepositoryIamMember } from '@cdktn/provider-google'

const artifactRegistryRepositoryIamMemberCondition: artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#expression ArtifactRegistryRepositoryIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#title ArtifactRegistryRepositoryIamMember#title}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#description ArtifactRegistryRepositoryIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#expression ArtifactRegistryRepositoryIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#title ArtifactRegistryRepositoryIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#description ArtifactRegistryRepositoryIamMember#description}.

---

### ArtifactRegistryRepositoryIamMemberConfig <a name="ArtifactRegistryRepositoryIamMemberConfig" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.Initializer"></a>

```typescript
import { artifactRegistryRepositoryIamMember } from '@cdktn/provider-google'

const artifactRegistryRepositoryIamMemberConfig: artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#member ArtifactRegistryRepositoryIamMember#member}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#repository ArtifactRegistryRepositoryIamMember#repository}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#role ArtifactRegistryRepositoryIamMember#role}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#id ArtifactRegistryRepositoryIamMember#id}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#location ArtifactRegistryRepositoryIamMember#location}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#project ArtifactRegistryRepositoryIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#member ArtifactRegistryRepositoryIamMember#member}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#repository ArtifactRegistryRepositoryIamMember#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#role ArtifactRegistryRepositoryIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: ArtifactRegistryRepositoryIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#condition ArtifactRegistryRepositoryIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#id ArtifactRegistryRepositoryIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#location ArtifactRegistryRepositoryIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/artifact_registry_repository_iam_member#project ArtifactRegistryRepositoryIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryRepositoryIamMemberConditionOutputReference <a name="ArtifactRegistryRepositoryIamMemberConditionOutputReference" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepositoryIamMember } from '@cdktn/provider-google'

new artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryIamMemberCondition;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRepositoryIamMember.ArtifactRegistryRepositoryIamMemberCondition">ArtifactRegistryRepositoryIamMemberCondition</a>

---




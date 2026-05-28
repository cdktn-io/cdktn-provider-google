# `secureSourceManagerBranchRule` Submodule <a name="`secureSourceManagerBranchRule` Submodule" id="@cdktn/provider-google.secureSourceManagerBranchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerBranchRule <a name="SecureSourceManagerBranchRule" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule google_secure_source_manager_branch_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer"></a>

```java
import io.cdktn.providers.google.secure_source_manager_branch_rule.SecureSourceManagerBranchRule;

SecureSourceManagerBranchRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .branchRuleId(java.lang.String)
    .includePattern(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .allowStaleReviews(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .minimumApprovalsCount(java.lang.Number)
//  .minimumReviewsCount(java.lang.Number)
//  .project(java.lang.String)
//  .requireCommentsResolved(java.lang.Boolean|IResolvable)
//  .requireLinearHistory(java.lang.Boolean|IResolvable)
//  .requirePullRequest(java.lang.Boolean|IResolvable)
//  .timeouts(SecureSourceManagerBranchRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.branchRuleId">branchRuleId</a></code> | <code>java.lang.String</code> | The ID for the BranchRule. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.includePattern">includePattern</a></code> | <code>java.lang.String</code> | The BranchRule matches branches based on the specified regular expression. Use .* to match all branches. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.allowStaleReviews">allowStaleReviews</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if allow stale reviews or approvals before merging to the branch. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if the branch rule is disabled or not. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.minimumApprovalsCount">minimumApprovalsCount</a></code> | <code>java.lang.Number</code> | The minimum number of approvals required for the branch rule to be matched. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.minimumReviewsCount">minimumReviewsCount</a></code> | <code>java.lang.Number</code> | The minimum number of reviews required for the branch rule to be matched. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requireCommentsResolved">requireCommentsResolved</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if require comments resolved before merging to the branch. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requireLinearHistory">requireLinearHistory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if require linear history before merging to the branch. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requirePullRequest">requirePullRequest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if the branch rule requires a pull request or not. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `branchRuleId`<sup>Required</sup> <a name="branchRuleId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.branchRuleId"></a>

- *Type:* java.lang.String

The ID for the BranchRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#branch_rule_id SecureSourceManagerBranchRule#branch_rule_id}

---

##### `includePattern`<sup>Required</sup> <a name="includePattern" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.includePattern"></a>

- *Type:* java.lang.String

The BranchRule matches branches based on the specified regular expression. Use .* to match all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#include_pattern SecureSourceManagerBranchRule#include_pattern}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#location SecureSourceManagerBranchRule#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#repository_id SecureSourceManagerBranchRule#repository_id}

---

##### `allowStaleReviews`<sup>Optional</sup> <a name="allowStaleReviews" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.allowStaleReviews"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if allow stale reviews or approvals before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#allow_stale_reviews SecureSourceManagerBranchRule#allow_stale_reviews}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#deletion_policy SecureSourceManagerBranchRule#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if the branch rule is disabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#disabled SecureSourceManagerBranchRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumApprovalsCount`<sup>Optional</sup> <a name="minimumApprovalsCount" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.minimumApprovalsCount"></a>

- *Type:* java.lang.Number

The minimum number of approvals required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#minimum_approvals_count SecureSourceManagerBranchRule#minimum_approvals_count}

---

##### `minimumReviewsCount`<sup>Optional</sup> <a name="minimumReviewsCount" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.minimumReviewsCount"></a>

- *Type:* java.lang.Number

The minimum number of reviews required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#minimum_reviews_count SecureSourceManagerBranchRule#minimum_reviews_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}.

---

##### `requireCommentsResolved`<sup>Optional</sup> <a name="requireCommentsResolved" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requireCommentsResolved"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if require comments resolved before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#require_comments_resolved SecureSourceManagerBranchRule#require_comments_resolved}

---

##### `requireLinearHistory`<sup>Optional</sup> <a name="requireLinearHistory" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requireLinearHistory"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if require linear history before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#require_linear_history SecureSourceManagerBranchRule#require_linear_history}

---

##### `requirePullRequest`<sup>Optional</sup> <a name="requirePullRequest" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requirePullRequest"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if the branch rule requires a pull request or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#require_pull_request SecureSourceManagerBranchRule#require_pull_request}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#timeouts SecureSourceManagerBranchRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetAllowStaleReviews">resetAllowStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumApprovalsCount">resetMinimumApprovalsCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumReviewsCount">resetMinimumReviewsCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireCommentsResolved">resetRequireCommentsResolved</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireLinearHistory">resetRequireLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequirePullRequest">resetRequirePullRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts"></a>

```java
public void putTimeouts(SecureSourceManagerBranchRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

---

##### `resetAllowStaleReviews` <a name="resetAllowStaleReviews" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetAllowStaleReviews"></a>

```java
public void resetAllowStaleReviews()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetId"></a>

```java
public void resetId()
```

##### `resetMinimumApprovalsCount` <a name="resetMinimumApprovalsCount" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumApprovalsCount"></a>

```java
public void resetMinimumApprovalsCount()
```

##### `resetMinimumReviewsCount` <a name="resetMinimumReviewsCount" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumReviewsCount"></a>

```java
public void resetMinimumReviewsCount()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequireCommentsResolved` <a name="resetRequireCommentsResolved" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireCommentsResolved"></a>

```java
public void resetRequireCommentsResolved()
```

##### `resetRequireLinearHistory` <a name="resetRequireLinearHistory" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireLinearHistory"></a>

```java
public void resetRequireLinearHistory()
```

##### `resetRequirePullRequest` <a name="resetRequirePullRequest" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequirePullRequest"></a>

```java
public void resetRequirePullRequest()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecureSourceManagerBranchRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct"></a>

```java
import io.cdktn.providers.google.secure_source_manager_branch_rule.SecureSourceManagerBranchRule;

SecureSourceManagerBranchRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement"></a>

```java
import io.cdktn.providers.google.secure_source_manager_branch_rule.SecureSourceManagerBranchRule;

SecureSourceManagerBranchRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource"></a>

```java
import io.cdktn.providers.google.secure_source_manager_branch_rule.SecureSourceManagerBranchRule;

SecureSourceManagerBranchRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.secure_source_manager_branch_rule.SecureSourceManagerBranchRule;

SecureSourceManagerBranchRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecureSourceManagerBranchRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecureSourceManagerBranchRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecureSourceManagerBranchRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecureSourceManagerBranchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerBranchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference">SecureSourceManagerBranchRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviewsInput">allowStaleReviewsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleIdInput">branchRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePatternInput">includePatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCountInput">minimumApprovalsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCountInput">minimumReviewsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolvedInput">requireCommentsResolvedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistoryInput">requireLinearHistoryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequestInput">requirePullRequestInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviews">allowStaleReviews</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleId">branchRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePattern">includePattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCount">minimumApprovalsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCount">minimumReviewsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolved">requireCommentsResolved</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistory">requireLinearHistory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequest">requirePullRequest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeouts"></a>

```java
public SecureSourceManagerBranchRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference">SecureSourceManagerBranchRuleTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `allowStaleReviewsInput`<sup>Optional</sup> <a name="allowStaleReviewsInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviewsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowStaleReviewsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `branchRuleIdInput`<sup>Optional</sup> <a name="branchRuleIdInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleIdInput"></a>

```java
public java.lang.String getBranchRuleIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includePatternInput`<sup>Optional</sup> <a name="includePatternInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePatternInput"></a>

```java
public java.lang.String getIncludePatternInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `minimumApprovalsCountInput`<sup>Optional</sup> <a name="minimumApprovalsCountInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCountInput"></a>

```java
public java.lang.Number getMinimumApprovalsCountInput();
```

- *Type:* java.lang.Number

---

##### `minimumReviewsCountInput`<sup>Optional</sup> <a name="minimumReviewsCountInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCountInput"></a>

```java
public java.lang.Number getMinimumReviewsCountInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `requireCommentsResolvedInput`<sup>Optional</sup> <a name="requireCommentsResolvedInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolvedInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireCommentsResolvedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requireLinearHistoryInput`<sup>Optional</sup> <a name="requireLinearHistoryInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistoryInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireLinearHistoryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requirePullRequestInput`<sup>Optional</sup> <a name="requirePullRequestInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequestInput"></a>

```java
public java.lang.Boolean|IResolvable getRequirePullRequestInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeoutsInput"></a>

```java
public IResolvable|SecureSourceManagerBranchRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

---

##### `allowStaleReviews`<sup>Required</sup> <a name="allowStaleReviews" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviews"></a>

```java
public java.lang.Boolean|IResolvable getAllowStaleReviews();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `branchRuleId`<sup>Required</sup> <a name="branchRuleId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleId"></a>

```java
public java.lang.String getBranchRuleId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includePattern`<sup>Required</sup> <a name="includePattern" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePattern"></a>

```java
public java.lang.String getIncludePattern();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `minimumApprovalsCount`<sup>Required</sup> <a name="minimumApprovalsCount" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCount"></a>

```java
public java.lang.Number getMinimumApprovalsCount();
```

- *Type:* java.lang.Number

---

##### `minimumReviewsCount`<sup>Required</sup> <a name="minimumReviewsCount" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCount"></a>

```java
public java.lang.Number getMinimumReviewsCount();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `requireCommentsResolved`<sup>Required</sup> <a name="requireCommentsResolved" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolved"></a>

```java
public java.lang.Boolean|IResolvable getRequireCommentsResolved();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requireLinearHistory`<sup>Required</sup> <a name="requireLinearHistory" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistory"></a>

```java
public java.lang.Boolean|IResolvable getRequireLinearHistory();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requirePullRequest`<sup>Required</sup> <a name="requirePullRequest" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequest"></a>

```java
public java.lang.Boolean|IResolvable getRequirePullRequest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerBranchRuleConfig <a name="SecureSourceManagerBranchRuleConfig" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google.secure_source_manager_branch_rule.SecureSourceManagerBranchRuleConfig;

SecureSourceManagerBranchRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .branchRuleId(java.lang.String)
    .includePattern(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .allowStaleReviews(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .minimumApprovalsCount(java.lang.Number)
//  .minimumReviewsCount(java.lang.Number)
//  .project(java.lang.String)
//  .requireCommentsResolved(java.lang.Boolean|IResolvable)
//  .requireLinearHistory(java.lang.Boolean|IResolvable)
//  .requirePullRequest(java.lang.Boolean|IResolvable)
//  .timeouts(SecureSourceManagerBranchRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.branchRuleId">branchRuleId</a></code> | <code>java.lang.String</code> | The ID for the BranchRule. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.includePattern">includePattern</a></code> | <code>java.lang.String</code> | The BranchRule matches branches based on the specified regular expression. Use .* to match all branches. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.allowStaleReviews">allowStaleReviews</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if allow stale reviews or approvals before merging to the branch. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if the branch rule is disabled or not. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount">minimumApprovalsCount</a></code> | <code>java.lang.Number</code> | The minimum number of approvals required for the branch rule to be matched. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumReviewsCount">minimumReviewsCount</a></code> | <code>java.lang.Number</code> | The minimum number of reviews required for the branch rule to be matched. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireCommentsResolved">requireCommentsResolved</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if require comments resolved before merging to the branch. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireLinearHistory">requireLinearHistory</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if require linear history before merging to the branch. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requirePullRequest">requirePullRequest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if the branch rule requires a pull request or not. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `branchRuleId`<sup>Required</sup> <a name="branchRuleId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.branchRuleId"></a>

```java
public java.lang.String getBranchRuleId();
```

- *Type:* java.lang.String

The ID for the BranchRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#branch_rule_id SecureSourceManagerBranchRule#branch_rule_id}

---

##### `includePattern`<sup>Required</sup> <a name="includePattern" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.includePattern"></a>

```java
public java.lang.String getIncludePattern();
```

- *Type:* java.lang.String

The BranchRule matches branches based on the specified regular expression. Use .* to match all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#include_pattern SecureSourceManagerBranchRule#include_pattern}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#location SecureSourceManagerBranchRule#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#repository_id SecureSourceManagerBranchRule#repository_id}

---

##### `allowStaleReviews`<sup>Optional</sup> <a name="allowStaleReviews" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.allowStaleReviews"></a>

```java
public java.lang.Boolean|IResolvable getAllowStaleReviews();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if allow stale reviews or approvals before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#allow_stale_reviews SecureSourceManagerBranchRule#allow_stale_reviews}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#deletion_policy SecureSourceManagerBranchRule#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if the branch rule is disabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#disabled SecureSourceManagerBranchRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumApprovalsCount`<sup>Optional</sup> <a name="minimumApprovalsCount" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount"></a>

```java
public java.lang.Number getMinimumApprovalsCount();
```

- *Type:* java.lang.Number

The minimum number of approvals required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#minimum_approvals_count SecureSourceManagerBranchRule#minimum_approvals_count}

---

##### `minimumReviewsCount`<sup>Optional</sup> <a name="minimumReviewsCount" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumReviewsCount"></a>

```java
public java.lang.Number getMinimumReviewsCount();
```

- *Type:* java.lang.Number

The minimum number of reviews required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#minimum_reviews_count SecureSourceManagerBranchRule#minimum_reviews_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}.

---

##### `requireCommentsResolved`<sup>Optional</sup> <a name="requireCommentsResolved" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireCommentsResolved"></a>

```java
public java.lang.Boolean|IResolvable getRequireCommentsResolved();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if require comments resolved before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#require_comments_resolved SecureSourceManagerBranchRule#require_comments_resolved}

---

##### `requireLinearHistory`<sup>Optional</sup> <a name="requireLinearHistory" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireLinearHistory"></a>

```java
public java.lang.Boolean|IResolvable getRequireLinearHistory();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if require linear history before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#require_linear_history SecureSourceManagerBranchRule#require_linear_history}

---

##### `requirePullRequest`<sup>Optional</sup> <a name="requirePullRequest" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requirePullRequest"></a>

```java
public java.lang.Boolean|IResolvable getRequirePullRequest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if the branch rule requires a pull request or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#require_pull_request SecureSourceManagerBranchRule#require_pull_request}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.timeouts"></a>

```java
public SecureSourceManagerBranchRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#timeouts SecureSourceManagerBranchRule#timeouts}

---

### SecureSourceManagerBranchRuleTimeouts <a name="SecureSourceManagerBranchRuleTimeouts" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.secure_source_manager_branch_rule.SecureSourceManagerBranchRuleTimeouts;

SecureSourceManagerBranchRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerBranchRuleTimeoutsOutputReference <a name="SecureSourceManagerBranchRuleTimeoutsOutputReference" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.secure_source_manager_branch_rule.SecureSourceManagerBranchRuleTimeoutsOutputReference;

new SecureSourceManagerBranchRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecureSourceManagerBranchRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

---



